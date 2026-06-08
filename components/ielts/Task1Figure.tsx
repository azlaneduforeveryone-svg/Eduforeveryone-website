// components/ielts/Task1Figure.tsx
"use client";
import { Task1Figure as Figure } from "@/lib/ielts-types";

// Zero-dependency renderer for IELTS Academic Task 1 visuals.
// Hand-rolled SVG (no chart library) so it works in the existing Next 14 build
// with no new packages. The grader reads chartDescription separately; this only
// controls what the candidate sees.

const PALETTE = ["#4f46e5", "#0891b2", "#059669", "#d97706", "#e11d48", "#7c3aed", "#0d9488", "#65a30d"];

function niceMax(v: number): number {
  if (v <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / pow;
  const ladder = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 7.5, 10];
  const step = ladder.find((s) => s >= n) ?? 10;
  return step * pow;
}

export default function Task1Figure({ figure }: { figure: Figure }) {
  return (
    <figure className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
      {renderByKind(figure)}
    </figure>
  );
}

function renderByKind(f: Figure) {
  switch (f.kind) {
    case "bar":
      return <BarChart f={f} />;
    case "line":
      return <LineChart f={f} />;
    case "pie":
      return <PieCharts f={f} />;
    case "table":
      return <DataTable f={f} />;
    case "process":
      return <ProcessDiagram f={f} />;
    case "map":
      return <MapPanels f={f} />;
  }
}

function Legend({ series }: { series: { name: string; color: string }[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center mb-3">
      {series.map((s) => (
        <span key={s.name} className="flex items-center gap-1.5 text-xs text-gray-600">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: s.color }} />
          {s.name}
        </span>
      ))}
    </div>
  );
}

// ─── BAR ──────────────────────────────────────────────────────
function BarChart({ f }: { f: Extract<Figure, { kind: "bar" }> }) {
  const W = 640, H = 340, padL = 48, padR = 16, padT = 16, padB = 56;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const colored = f.series.map((s, i) => ({ ...s, color: s.color ?? PALETTE[i % PALETTE.length] }));

  const max =
    f.mode === "stacked"
      ? niceMax(Math.max(...f.categories.map((_, ci) => colored.reduce((sum, s) => sum + (s.values[ci] ?? 0), 0))))
      : niceMax(Math.max(...colored.flatMap((s) => s.values)));

  const ticks = 5;
  const groupW = innerW / f.categories.length;
  const y = (v: number) => padT + innerH - (v / max) * innerH;

  return (
    <div>
      <Legend series={colored} />
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Bar chart">
        {/* y gridlines + labels */}
        {Array.from({ length: ticks + 1 }).map((_, i) => {
          const val = (max / ticks) * i;
          const yy = y(val);
          return (
            <g key={i}>
              <line x1={padL} y1={yy} x2={W - padR} y2={yy} stroke="#e5e7eb" strokeWidth={1} />
              <text x={padL - 6} y={yy + 4} textAnchor="end" fontSize={11} fill="#6b7280">
                {Number.isInteger(val) ? val : val.toFixed(1)}
              </text>
            </g>
          );
        })}
        {/* bars */}
        {f.categories.map((cat, ci) => {
          const gx = padL + ci * groupW;
          if (f.mode === "stacked") {
            let acc = 0;
            const bw = groupW * 0.5;
            const bx = gx + (groupW - bw) / 2;
            return (
              <g key={cat}>
                {colored.map((s) => {
                  const v = s.values[ci] ?? 0;
                  const h = (v / max) * innerH;
                  const yy = y(acc + v);
                  acc += v;
                  return <rect key={s.name} x={bx} y={yy} width={bw} height={h} fill={s.color} />;
                })}
                <text x={gx + groupW / 2} y={H - padB + 16} textAnchor="middle" fontSize={11} fill="#374151">
                  {cat}
                </text>
              </g>
            );
          }
          const bw = (groupW * 0.7) / colored.length;
          const startX = gx + groupW * 0.15;
          return (
            <g key={cat}>
              {colored.map((s, si) => {
                const v = s.values[ci] ?? 0;
                const h = (v / max) * innerH;
                return (
                  <rect key={s.name} x={startX + si * bw} y={y(v)} width={bw * 0.9} height={h} fill={s.color} />
                );
              })}
              <text x={gx + groupW / 2} y={H - padB + 16} textAnchor="middle" fontSize={11} fill="#374151">
                {cat}
              </text>
            </g>
          );
        })}
        <text x={padL} y={12} fontSize={11} fill="#9ca3af">{f.unit}</text>
      </svg>
    </div>
  );
}

// ─── LINE ─────────────────────────────────────────────────────
function LineChart({ f }: { f: Extract<Figure, { kind: "line" }> }) {
  const W = 640, H = 340, padL = 48, padR = 16, padT = 16, padB = 48;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const colored = f.series.map((s, i) => ({ ...s, color: s.color ?? PALETTE[i % PALETTE.length] }));

  const allVals = colored.flatMap((s) => s.values);
  const dataMin = Math.min(...allVals);
  const yMin = dataMin >= 0 ? 0 : Math.floor(dataMin / 5) * 5;
  const yMax = niceMax(Math.max(...allVals));
  const ticks = 5;

  const n = f.xLabels.length;
  const x = (i: number) => padL + (n === 1 ? innerW / 2 : (i * innerW) / (n - 1));
  const y = (v: number) => padT + innerH - ((v - yMin) / (yMax - yMin)) * innerH;
  const pts = (vals: number[], from: number, to: number) =>
    vals.slice(from, to + 1).map((v, k) => `${x(from + k)},${y(v)}`).join(" ");

  const split = f.projectionFromIndex;

  return (
    <div>
      <Legend series={colored} />
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Line graph">
        {Array.from({ length: ticks + 1 }).map((_, i) => {
          const val = yMin + ((yMax - yMin) / ticks) * i;
          const yy = y(val);
          return (
            <g key={i}>
              <line x1={padL} y1={yy} x2={W - padR} y2={yy} stroke="#e5e7eb" strokeWidth={1} />
              <text x={padL - 6} y={yy + 4} textAnchor="end" fontSize={11} fill="#6b7280">
                {Number.isInteger(val) ? val : val.toFixed(1)}
              </text>
            </g>
          );
        })}
        {f.xLabels.map((lab, i) => (
          <text key={lab + i} x={x(i)} y={H - padB + 16} textAnchor="middle" fontSize={11} fill="#374151">
            {lab}
          </text>
        ))}
        {colored.map((s) => (
          <g key={s.name}>
            {split === undefined ? (
              <polyline points={pts(s.values, 0, n - 1)} fill="none" stroke={s.color} strokeWidth={2.5} />
            ) : (
              <>
                <polyline points={pts(s.values, 0, split)} fill="none" stroke={s.color} strokeWidth={2.5} />
                <polyline
                  points={pts(s.values, split, n - 1)}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={2.5}
                  strokeDasharray="5 4"
                />
              </>
            )}
            {s.values.map((v, i) => (
              <circle key={i} cx={x(i)} cy={y(v)} r={2.5} fill={s.color} />
            ))}
          </g>
        ))}
        <text x={padL} y={12} fontSize={11} fill="#9ca3af">{f.unit}</text>
        {split !== undefined && (
          <text x={W - padR} y={12} textAnchor="end" fontSize={10} fill="#9ca3af">
            dashed = projection
          </text>
        )}
      </svg>
    </div>
  );
}

// ─── PIE ──────────────────────────────────────────────────────
function PieCharts({ f }: { f: Extract<Figure, { kind: "pie" }> }) {
  const unit = f.unit ?? "%";
  // Consistent colours by label across both charts.
  const labels = Array.from(new Set(f.charts.flatMap((c) => c.slices.map((s) => s.label))));
  const colorOf = (label: string) => PALETTE[labels.indexOf(label) % PALETTE.length];

  return (
    <div>
      <Legend series={labels.map((l) => ({ name: l, color: colorOf(l) }))} />
      <div className="flex flex-wrap justify-center gap-6">
        {f.charts.map((chart) => {
          const total = chart.slices.reduce((a, s) => a + s.value, 0);
          let angle = -Math.PI / 2;
          const R = 80, cx = 100, cy = 100;
          return (
            <div key={chart.title} className="text-center">
              <svg viewBox="0 0 200 200" className="w-44 h-44" role="img" aria-label={`Pie chart ${chart.title}`}>
                {chart.slices.map((s) => {
                  const frac = s.value / total;
                  const start = angle;
                  const end = angle + frac * 2 * Math.PI;
                  angle = end;
                  const x1 = cx + R * Math.cos(start), y1 = cy + R * Math.sin(start);
                  const x2 = cx + R * Math.cos(end), y2 = cy + R * Math.sin(end);
                  const large = end - start > Math.PI ? 1 : 0;
                  const mid = (start + end) / 2;
                  const lx = cx + R * 0.6 * Math.cos(mid), ly = cy + R * 0.6 * Math.sin(mid);
                  return (
                    <g key={s.label}>
                      <path
                        d={`M ${cx} ${cy} L ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} Z`}
                        fill={colorOf(s.label)}
                      />
                      {frac >= 0.08 && (
                        <text x={lx} y={ly} textAnchor="middle" fontSize={11} fill="#fff" fontWeight={600}>
                          {s.value}{unit === "%" ? "%" : ""}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
              <p className="text-sm font-semibold text-gray-700 mt-1">{chart.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── TABLE ────────────────────────────────────────────────────
function DataTable({ f }: { f: Extract<Figure, { kind: "table" }> }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {f.columns.map((c, i) => (
              <th
                key={c}
                className={`border-b-2 border-gray-300 px-3 py-2 font-semibold text-gray-700 ${i === 0 ? "text-left" : "text-right"}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {f.rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 ? "bg-gray-50" : ""}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`border-b border-gray-100 px-3 py-2 text-gray-600 ${ci === 0 ? "text-left font-medium text-gray-800" : "text-right tabular-nums"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── PROCESS ──────────────────────────────────────────────────
function ProcessDiagram({ f }: { f: Extract<Figure, { kind: "process" }> }) {
  return (
    <div className="space-y-2">
      {f.cyclical && (
        <p className="text-xs font-semibold text-indigo-600 text-center">↻ Cyclical process — step {f.steps.length} returns to step 1</p>
      )}
      <ol className="space-y-2">
        {f.steps.map((s, i) => (
          <li key={s.n} className="flex gap-3 items-start">
            <span className="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
              {s.n}
            </span>
            <div className="flex-1 rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm text-gray-700">
              {s.text}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ─── MAP ──────────────────────────────────────────────────────
function MapPanels({ f }: { f: Extract<Figure, { kind: "map" }> }) {
  const Panel = ({ title, items, tone }: { title: string; items: string[]; tone: "before" | "after" }) => (
    <div className={`flex-1 rounded-xl border p-4 ${tone === "before" ? "border-gray-200 bg-gray-50" : "border-indigo-200 bg-indigo-50"}`}>
      <p className={`text-sm font-bold mb-2 ${tone === "before" ? "text-gray-600" : "text-indigo-700"}`}>{title}</p>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="text-xs text-gray-700 flex gap-2">
            <span className={tone === "before" ? "text-gray-400" : "text-indigo-400"}>▪</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div>
      <p className="text-xs text-gray-400 text-center mb-3">Map comparison — key features</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Panel title={f.beforeTitle} items={f.before} tone="before" />
        <Panel title={f.afterTitle} items={f.after} tone="after" />
      </div>
    </div>
  );
}
