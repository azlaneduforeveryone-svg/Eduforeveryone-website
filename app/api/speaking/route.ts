// app/api/speaking/route.ts
export const runtime = "edge";

const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";

const clamp = (n: unknown): number => {
  const v = typeof n === "number" ? n : parseFloat(String(n));
  if (isNaN(v)) return 5;
  const rounded = Math.round(v * 2) / 2;
  return Math.min(9, Math.max(1, rounded));
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return json({ error: "Invalid JSON body." }, 400);

  const { task = "", response: studentResponse = "", part = 2, topic = "General" } = body;

  if (!task || !studentResponse) return json({ error: "Missing task or response." }, 400);
  if (typeof studentResponse !== "string" || wordCount(studentResponse) < 20)
    return json({ error: "Please speak (or type) at least 20 words before submitting." }, 400);

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) return json({ error: "Server configuration error: scoring key not set." }, 500);

  // IMPORTANT: this grades a TEXT TRANSCRIPT, so it can only honestly assess the
  // criteria that survive transcription. Pronunciation is deliberately NOT scored.
  const systemPrompt = `You are an experienced IELTS Speaking examiner. You are grading a TEXT TRANSCRIPT of a spoken response, NOT the audio.

Because you only have the transcript, you can ONLY assess three things, and you must NOT invent a pronunciation score:
- "lr"  = Lexical Resource (range, precision and naturalness of vocabulary, collocation, paraphrase).
- "gra" = Grammatical Range & Accuracy (sentence variety and correctness).
- "coh" = Coherence & Organisation (logical flow, linking, relevance to the task, development of ideas). Note: true fluency (pace, hesitation, self-correction) cannot be judged from text, so judge only the organisational side.

Use the official IELTS band scale (1-9, in 0.5 steps). Be honest and constructive — this is for learning, not encouragement.

Return ONLY valid JSON (no markdown fences, no commentary):
{
  "overall": number,
  "lr":  { "score": number, "feedback": "2-3 sentences on vocabulary" },
  "gra": { "score": number, "feedback": "2-3 sentences on grammar" },
  "coh": { "score": number, "feedback": "2-3 sentences on coherence/organisation and task relevance" },
  "summary": "one honest sentence on the overall transcript quality",
  "top_fix": "the single most useful thing to improve next"
}

Rules:
- "overall" must equal the average of lr, gra and coh, rounded to the nearest 0.5.
- If the transcript is under ~20 words or barely on-topic, score 3 or below across the board and say why.
- If the response ignores the task/question, lower "coh" heavily.
- Do not reward length alone; reward range, accuracy and relevance.`;

  const userPrompt = `IELTS Speaking Part ${part}
Topic: ${topic}
Task / question:
${task}

Transcript of the student's spoken response:
${studentResponse}

Grade ONLY lexical resource, grammar and coherence from this transcript. Return ONLY the JSON object.`;

  try {
    const res = await fetch(DEEPSEEK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "deepseek-v4-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`[speaking] DeepSeek error ${res.status}:`, errorText);
      return json({ error: `Scoring service error (${res.status}). Please try again.` }, 502);
    }

    const data = await res.json();
    const rawContent = data.choices?.[0]?.message?.content;
    if (!rawContent) {
      console.error("[speaking] No content in DeepSeek response", data);
      return json({ error: "Invalid response from scoring service." }, 502);
    }

    const cleaned = rawContent.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(cleaned);
    } catch (err) {
      console.error("[speaking] JSON parse failed. Raw:", cleaned, err);
      return json({ error: "Could not parse scores. Please try again." }, 502);
    }

    const crit = (key: string) => {
      const c = parsed[key] as Record<string, unknown> | undefined;
      return {
        score: clamp(c?.score),
        feedback: typeof c?.feedback === "string" ? c.feedback : "No specific feedback provided.",
      };
    };

    const lr = crit("lr");
    const gra = crit("gra");
    const coh = crit("coh");
    // Recompute overall from the three assessed criteria so it is always consistent.
    const overall = clamp((lr.score + gra.score + coh.score) / 3);

    return json({
      overall,
      scope: "text", // signals to the UI that pronunciation/full fluency were not graded
      lr,
      gra,
      coh,
      summary: typeof parsed.summary === "string" ? parsed.summary : "Keep practising!",
      top_fix:
        typeof parsed.top_fix === "string" ? parsed.top_fix : "Focus on the weakest criterion above.",
    });
  } catch (err: unknown) {
    console.error("[speaking] Unexpected error:", err);
    return json({ error: "Failed to reach the scoring service. Check your connection and try again." }, 502);
  }
}
