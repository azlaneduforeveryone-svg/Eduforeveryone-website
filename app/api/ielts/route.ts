import { NextRequest, NextResponse } from 'next/server'

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-001:generateContent'

const clamp = (n: unknown): number => {
  const v = typeof n === 'number' ? n : parseFloat(String(n))
  if (isNaN(v)) return 5
  return Math.min(9, Math.max(1, Math.round(v * 2) / 2))
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })

  const { task = '', response: studentResponse = '' } = body

  if (typeof task !== 'string' || task.length < 10 || task.length > 2000)
    return NextResponse.json(
      { error: 'Task must be between 10 and 2000 characters.' },
      { status: 400 }
    )

  if (
    typeof studentResponse !== 'string' ||
    studentResponse.length < 50 ||
    studentResponse.length > 10000
  )
    return NextResponse.json(
      { error: 'Response must be between 50 and 10,000 characters.' },
      { status: 400 }
    )

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    console.error('[ielts] GEMINI_API_KEY is not set')
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const wc = studentResponse.trim().split(/\s+/).length

  const prompt = `You are an expert IELTS examiner. Score the student response against all four IELTS Writing Task 2 band descriptors. Word count: ${wc}.

TASK:
${task}

STUDENT RESPONSE:
${studentResponse}

Return ONLY valid JSON, no markdown, no preamble:
{
  "overall": <number 1-9 in 0.5 steps>,
  "ta": { "score": <number>, "feedback": "<2-3 sentences>" },
  "cc": { "score": <number>, "feedback": "<2-3 sentences>" },
  "lr": { "score": <number>, "feedback": "<2-3 sentences>" },
  "gr": { "score": <number>, "feedback": "<2-3 sentences>" },
  "summary": "<one sentence overall verdict>",
  "top_fix": "<single most impactful improvement the student should make>"
}`

  let geminiRes: Response
  try {
    geminiRes = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
        },
      }),
    })
  } catch (err) {
    console.error('[ielts] Failed to reach Gemini:', err)
    return NextResponse.json({ error: 'Failed to reach scoring service.' }, { status: 502 })
  }

  if (!geminiRes.ok) {
    const detail = await geminiRes.text().catch(() => '')
    console.error(`[ielts] Gemini returned ${geminiRes.status}:`, detail)
    return NextResponse.json({ error: 'Scoring service error. Try again.' }, { status: 502 })
  }

  const geminiData = await geminiRes.json().catch(() => null)
  if (!geminiData) {
    console.error('[ielts] Could not parse Gemini response')
    return NextResponse.json({ error: 'Invalid response from scoring service.' }, { status: 502 })
  }

  const raw: string =
    geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''

  const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim()

  let parsed: Record<string, unknown>
  try {
    parsed = JSON.parse(cleaned)
  } catch (err) {
    console.error('[ielts] JSON parse failed. Raw output:', raw, err)
    return NextResponse.json({ error: 'Could not parse scores. Please try again.' }, { status: 502 })
  }

  const safe = (key: string) => ({
    score: clamp((parsed[key] as Record<string, unknown>)?.score),
    feedback:
      typeof (parsed[key] as Record<string, unknown>)?.feedback === 'string'
        ? (parsed[key] as Record<string, unknown>).feedback
        : '',
  })

  return NextResponse.json({
    overall: clamp(parsed.overall),
    ta: safe('ta'),
    cc: safe('cc'),
    lr: safe('lr'),
    gr: safe('gr'),
    summary: typeof parsed.summary === 'string' ? parsed.summary : '',
    top_fix: typeof parsed.top_fix === 'string' ? parsed.top_fix : '',
  })
}