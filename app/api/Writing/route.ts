// app/api/writing/route.ts
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
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  const { task, response } = body;
  if (!task || !response) return NextResponse.json({ error: 'Missing task/response' }, { status: 400 });

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'Server config error' }, { status: 500 });

  const sysPrompt = `You are an IELTS examiner. Score the essay using official band descriptors (0-9). Return JSON:
{
  "overall": number,
  "ta": { "score": number, "feedback": "2-3 sentences" },
  "cc": { "score": number, "feedback": "2-3 sentences" },
  "lr": { "score": number, "feedback": "2-3 sentences" },
  "gr": { "score": number, "feedback": "2-3 sentences" },
  "summary": "one sentence",
  "top_fix": "single actionable improvement"
}`;

  const userPrompt = `Task: ${task}\n\nEssay: ${response}`;

  const deepseekRes = await fetch(DEEPSEEK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: 'deepseek-v4-flash',
      messages: [{ role: 'system', content: sysPrompt }, { role: 'user', content: userPrompt }],
      temperature: 0.3,
      response_format: { type: 'json_object' },
    }),
  });

  if (!deepseekRes.ok) return NextResponse.json({ error: 'DeepSeek API error' }, { status: 502 });
  const data = await deepseekRes.json();
  const raw = data.choices?.[0]?.message?.content;
  if (!raw) return NextResponse.json({ error: 'No response' }, { status: 502 });

  const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  let parsed;
  try { parsed = JSON.parse(cleaned); } catch { return NextResponse.json({ error: 'Parse error' }, { status: 502 }); }

  const safe = (key: string) => ({
    score: clamp((parsed[key] as any)?.score),
    feedback: (parsed[key] as any)?.feedback || '',
  });

  return NextResponse.json({
    overall: clamp(parsed.overall),
    ta: safe('ta'), cc: safe('cc'), lr: safe('lr'), gr: safe('gr'),
    summary: parsed.summary || '',
    top_fix: parsed.top_fix || '',
  });
}