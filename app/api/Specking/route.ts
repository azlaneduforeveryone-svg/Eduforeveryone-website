// app/api/speaking/route.ts
import { NextRequest, NextResponse } from 'next/server';

const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';

const clamp = (n: unknown): number => {
  const v = typeof n === 'number' ? n : parseFloat(String(n));
  if (isNaN(v)) return 5;
  const rounded = Math.round(v * 2) / 2;
  return Math.min(9, Math.max(1, rounded));
};

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });

  const { task = '', response: studentResponse = '', part = 2, topic = '' } = body;

  if (typeof task !== 'string' || task.length < 5) {
    return NextResponse.json({ error: 'Task description is too short.' }, { status: 400 });
  }
  if (typeof studentResponse !== 'string' || studentResponse.length < 20) {
    return NextResponse.json({ error: 'Response must be at least 20 characters.' }, { status: 400 });
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    console.error('[speaking] DEEPSEEK_API_KEY is not set');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  const systemPrompt = `You are an expert IELTS Speaking examiner. Grade the student's spoken response according to the official IELTS Speaking band descriptors (0–9 scale).

The four criteria are:
1. Fluency and Coherence (FC) – smoothness, logical flow, hesitation, development of ideas.
2. Lexical Resource (LR) – range and accuracy of vocabulary, use of less common/idiomatic items.
3. Grammatical Range and Accuracy (GRA) – variety of sentence structures, error frequency.
4. Pronunciation (P) – clarity, intonation, word stress, accent influence.

Return ONLY valid JSON with this structure:
{
  "overall": number (0-9 in 0.5 steps),
  "ta": { "score": number, "feedback": "2-3 sentences about Fluency & Coherence" },
  "cc": { "score": number, "feedback": "2-3 sentences about Lexical Resource" },
  "lr": { "score": number, "feedback": "2-3 sentences about Grammatical Range" },
  "gr": { "score": number, "feedback": "2-3 sentences about Pronunciation" },
  "summary": "one sentence overall verdict",
  "top_fix": "single most actionable improvement"
}

Important: The feedback must be constructive and specific to the transcript. If the response is off‑topic, repetitive, or too short, score low (1-2) and explain why.`;

  const userPrompt = `IELTS Speaking Task (Part ${part}, Topic: ${topic}):
${task}

Student's spoken response (transcript):
${studentResponse}

Grade strictly using the IELTS Speaking rubric. Return only JSON.`;

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
    });

    if (!deepseekRes.ok) {
      const errorText = await deepseekRes.text();
      console.error(`[speaking] DeepSeek error ${deepseekRes.status}:`, errorText);
      return NextResponse.json({ error: 'DeepSeek API error. Please try again later.' }, { status: 502 });
    }

    const data = await deepseekRes.json();
    const rawContent = data.choices?.[0]?.message?.content;

    if (!rawContent) {
      return NextResponse.json({ error: 'Invalid response from scoring service.' }, { status: 502 });
    }

    const cleaned = rawContent.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(cleaned);
    } catch (err) {
      console.error('[speaking] JSON parse failed:', cleaned, err);
      return NextResponse.json({ error: 'Could not parse scores. Please try again.' }, { status: 502 });
    }

    const safe = (key: string) => ({
      score: clamp((parsed[key] as Record<string, unknown>)?.score),
      feedback: typeof (parsed[key] as Record<string, unknown>)?.feedback === 'string'
        ? (parsed[key] as Record<string, unknown>).feedback as string
        : 'No specific feedback provided.',
    });

    return NextResponse.json({
      overall: clamp(parsed.overall),
      ta: safe('ta'),
      cc: safe('cc'),
      lr: safe('lr'),
      gr: safe('gr'),
      summary: typeof parsed.summary === 'string' ? parsed.summary : 'Keep practicing!',
      top_fix: typeof parsed.top_fix === 'string' ? parsed.top_fix : 'Focus on the weakest criterion above.',
    });
  } catch (err: any) {
    console.error('[speaking] Unexpected error:', err);
    return NextResponse.json({ error: 'Failed to reach scoring service.' }, { status: 502 });
  }
}