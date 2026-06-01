// app/api/speaking/route.ts
export const runtime = 'edge';

const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';

const clamp = (n: unknown): number => {
  const v = typeof n === 'number' ? n : parseFloat(String(n));
  if (isNaN(v)) return 5;
  const rounded = Math.round(v * 2) / 2;
  return Math.min(9, Math.max(1, rounded));
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return json({ error: 'Invalid JSON body.' }, 400);

  const { task = '', response: studentResponse = '', part = 2, topic = 'General' } = body;

  if (!task || !studentResponse)
    return json({ error: 'Missing task or response.' }, 400);

  if (typeof studentResponse !== 'string' || studentResponse.trim().length < 20)
    return json({ error: 'Response too short. Please record more speech.' }, 400);

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) return json({ error: 'Server configuration error.' }, 500);

  const systemPrompt = `You are an expert IELTS Speaking examiner. Grade the spoken response (transcript) using official IELTS band descriptors (0-9).

Return ONLY valid JSON (no markdown, no extra text):
{
  "overall": number (0-9 in 0.5 steps),
  "ta": { "score": number, "feedback": "2-3 sentences on Fluency & Coherence" },
  "cc": { "score": number, "feedback": "2-3 sentences on Lexical Resource" },
  "lr": { "score": number, "feedback": "2-3 sentences on Grammatical Range & Accuracy" },
  "gr": { "score": number, "feedback": "2-3 sentences on Pronunciation" },
  "summary": "one sentence overall assessment",
  "top_fix": "single most important actionable improvement"
}

Rules:
- If the transcript is too short (under 20 words), score 1 across all criteria.
- If the response is off-topic, deduct heavily from Task Achievement.
- Be honest and constructive — this is for learning.`;

  const userPrompt = `IELTS Speaking Part ${part}
Topic: ${topic}
Task: ${task}

Transcript of student response:
${studentResponse}

Grade this spoken response using the IELTS band descriptors. Return ONLY valid JSON.`;

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
      return json({ error: `DeepSeek API error: ${deepseekRes.status}` }, 502);
    }

    const deepseekData = await deepseekRes.json();
    const rawContent = deepseekData.choices?.[0]?.message?.content;

    if (!rawContent) {
      console.error('[speaking] No content in DeepSeek response', deepseekData);
      return json({ error: 'Invalid response from scoring service.' }, 502);
    }

    const cleaned = rawContent
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/, '')
      .trim();

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(cleaned);
    } catch (err) {
      console.error('[speaking] JSON parse failed. Raw output:', cleaned, err);
      return json({ error: 'Could not parse scores. Please try again.' }, 502);
    }

    const safe = (key: string) => ({
      score: clamp((parsed[key] as Record<string, unknown>)?.score),
      feedback:
        typeof (parsed[key] as Record<string, unknown>)?.feedback === 'string'
          ? ((parsed[key] as Record<string, unknown>).feedback as string)
          : 'No specific feedback provided.',
    });

    return json({
      overall: clamp(parsed.overall),
      ta: safe('ta'),
      cc: safe('cc'),
      lr: safe('lr'),
      gr: safe('gr'),
      summary: typeof parsed.summary === 'string' ? parsed.summary : 'Keep practicing!',
      top_fix:
        typeof parsed.top_fix === 'string'
          ? parsed.top_fix
          : 'Focus on the weakest criterion above.',
    });
  } catch (err: unknown) {
    console.error('[speaking] Unexpected error:', err);
    return json(
      { error: 'Failed to reach scoring service. Check your connection and try again.' },
      502
    );
  }
}