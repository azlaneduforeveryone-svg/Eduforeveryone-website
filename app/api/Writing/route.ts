// app/api/writing/route.ts
import { NextRequest, NextResponse } from 'next/server'

const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions'

const clamp = (n: unknown): number => {
  const v = typeof n === 'number' ? n : parseFloat(String(n))
  if (isNaN(v)) return 5
  const rounded = Math.round(v * 2) / 2
  return Math.min(9, Math.max(1, rounded))
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })

  const { testType = 'Academic', taskType = 'unknown', task = '', response: studentResponse = '' } = body

  if (typeof task !== 'string' || task.length < 10 || task.length > 2000) {
    return NextResponse.json({ error: 'Task must be between 10 and 2000 characters.' }, { status: 400 })
  }
  if (typeof studentResponse !== 'string' || studentResponse.length < 50 || studentResponse.length > 10000) {
    return NextResponse.json({ error: 'Response must be between 50 and 10,000 characters.' }, { status: 400 })
  }

  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) {
    console.error('[writing] DEEPSEEK_API_KEY is not set')
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const wordCount = studentResponse.trim().split(/\s+/).length

  // ── Task-type specific instructions ──────────────────────────────────────
  let typeSpecificInstructions = ''

  if (testType === 'Academic' && taskType.startsWith('t1')) {
    if (taskType.includes('bar-chart') || taskType.includes('line-graph') || taskType.includes('pie-chart') || taskType.includes('table')) {
      typeSpecificInstructions = `You are grading an IELTS Academic Writing Task 1 (chart/table). The student must:
- Provide a clear overview summarising the main trends.
- Compare and contrast data, not just list numbers.
- Use appropriate language for trends (e.g., "rose sharply", "remained stable").
If the essay describes data without comparisons or missing overview, deduct marks.`
    } else if (taskType.includes('process')) {
      typeSpecificInstructions = `You are grading an IELTS Academic Writing Task 1 (process diagram). The student must:
- Describe stages in logical order using sequencing language (firstly, subsequently, finally).
- Use passive voice where appropriate.
- Avoid adding opinions or explanations — just describe the process.`
    } else if (taskType.includes('map')) {
      typeSpecificInstructions = `You are grading an IELTS Academic Writing Task 1 (map comparison). The student must:
- Compare changes over time (e.g., "the park was expanded", "a new road was added").
- Use language of change and contrast.
- Provide an overview of the most significant changes.`
    } else {
      typeSpecificInstructions = `You are grading an IELTS Academic Writing Task 1. Focus on task achievement, data selection, comparisons, and overview.`
    }
  } else if (testType === 'General' && taskType.startsWith('t1')) {
    typeSpecificInstructions = `You are grading an IELTS General Training Writing Task 1 (letter). The student must:
- Identify the correct tone (formal, semi-formal, informal).
- Cover all three bullet points.
- Use appropriate opening/closing phrases.
Penalise inconsistent tone (e.g., informal language in a formal complaint letter).`
  } else if (taskType.startsWith('t2')) {
    if (taskType.includes('agree-disagree')) {
      typeSpecificInstructions = `You are grading an IELTS Writing Task 2 (Agree/Disagree essay). The student must:
- State a clear, consistent position from the introduction.
- Support arguments with reasons and examples.
- Acknowledge the opposing view for balance.`
    } else if (taskType.includes('discuss-both')) {
      typeSpecificInstructions = `You are grading an IELTS Writing Task 2 (Discuss both views essay). The student must:
- Dedicate one paragraph to each view, presenting them fairly.
- Give their own opinion (usually in the conclusion or final body paragraph).`
    } else if (taskType.includes('advantages-disadvantages')) {
      typeSpecificInstructions = `You are grading an IELTS Writing Task 2 (Advantages/Disadvantages essay). The student must:
- Discuss both positive and negative aspects.
- Provide a reasoned judgment in the conclusion.`
    } else if (taskType.includes('causes-solutions')) {
      typeSpecificInstructions = `You are grading an IELTS Writing Task 2 (Causes/Solutions essay). The student must:
- Clearly identify causes and link them to realistic solutions.
- Ensure each solution is fully developed.`
    } else if (taskType.includes('two-part')) {
      typeSpecificInstructions = `You are grading an IELTS Writing Task 2 (Two-part question essay). The student must:
- Answer every part of the question explicitly.
- Organise paragraphs around each question part.`
    } else {
      typeSpecificInstructions = `You are grading an IELTS Writing Task 2 essay. Focus on clear position, well-developed ideas, coherence, and grammar.`
    }
  } else {
    typeSpecificInstructions = `You are an expert IELTS examiner. Follow the official band descriptors.`
  }

  // ── Prompts ───────────────────────────────────────────────────────────────
  const systemPrompt = `You are an expert IELTS examiner. You MUST follow these rules strictly:

1. Task Relevance (CRITICAL): First, determine if the student's response actually addresses the given task. If completely off-topic:
   - Task Achievement = 1 or 2
   - Overall band = below 3
   - Feedback must clearly explain why the response does not address the task.

2. Repetition & Quality Check: If the response contains repeated paragraphs, nonsense text, or is clearly not a genuine attempt, score 1 across all criteria and explain why.

3. Scoring Guidelines (only if response is relevant and genuine):
   ${typeSpecificInstructions}

   Use the official IELTS band descriptors (0-9) for:
   - Task Achievement
   - Coherence & Cohesion
   - Lexical Resource
   - Grammatical Range & Accuracy

4. Output Format: Return ONLY valid JSON (no markdown, no extra text):
{
  "overall": number (0-9 in 0.5 steps),
  "ta": { "score": number, "feedback": "2-3 sentences" },
  "cc": { "score": number, "feedback": "2-3 sentences" },
  "lr": { "score": number, "feedback": "2-3 sentences" },
  "gr": { "score": number, "feedback": "2-3 sentences" },
  "summary": "one sentence",
  "top_fix": "single actionable improvement"
}`

  const userPrompt = `TASK (${testType} – ${taskType}):
${task}

STUDENT RESPONSE (${wordCount} words):
${studentResponse}

INSTRUCTIONS FOR EXAMINER:
- First, check if the response matches the task type. If not, score very low.
- If repetitive or nonsense, score 1 across all criteria.
- Only use the detailed IELTS rubric if the response is appropriate and genuine.

Return ONLY valid JSON as specified.`

  // ── DeepSeek call ─────────────────────────────────────────────────────────
  try {
    const deepseekRes = await fetch(DEEPSEEK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-v4-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.3,
        response_format: { type: 'json_object' },
      }),
    })

    if (!deepseekRes.ok) {
      const errorText = await deepseekRes.text()
      console.error(`[writing] DeepSeek error ${deepseekRes.status}:`, errorText)
      return NextResponse.json({ error: `DeepSeek API error: ${deepseekRes.status}` }, { status: 502 })
    }

    const deepseekData = await deepseekRes.json()
    const rawContent = deepseekData.choices?.[0]?.message?.content

    if (!rawContent) {
      console.error('[writing] No content in DeepSeek response', deepseekData)
      return NextResponse.json({ error: 'Invalid response from scoring service.' }, { status: 502 })
    }

    const cleaned = rawContent.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim()
    let parsed: Record<string, unknown>
    try {
      parsed = JSON.parse(cleaned)
    } catch (err) {
      console.error('[writing] JSON parse failed. Raw output:', cleaned, err)
      return NextResponse.json({ error: 'Could not parse scores. Please try again.' }, { status: 502 })
    }

    const safe = (key: string) => ({
      score: clamp((parsed[key] as Record<string, unknown>)?.score),
      feedback: typeof (parsed[key] as Record<string, unknown>)?.feedback === 'string'
        ? (parsed[key] as Record<string, unknown>).feedback as string
        : 'No specific feedback provided.',
    })

    return NextResponse.json({
      overall: clamp(parsed.overall),
      ta: safe('ta'),
      cc: safe('cc'),
      lr: safe('lr'),
      gr: safe('gr'),
      summary: typeof parsed.summary === 'string' ? parsed.summary : 'Keep practicing!',
      top_fix: typeof parsed.top_fix === 'string' ? parsed.top_fix : 'Focus on the weakest criterion above.',
    })
  } catch (err: unknown) {
    console.error('[writing] Unexpected error:', err)
    return NextResponse.json({ error: 'Failed to reach scoring service. Check your connection and try again.' }, { status: 502 })
  }
}