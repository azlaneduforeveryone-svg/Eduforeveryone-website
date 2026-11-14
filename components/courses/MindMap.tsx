// One-screen topic map for O Level Accounting topics.
// No external dependencies, no client JS. On small screens the branches
// stack under the centre; from md up they sit left and right of it.

export interface MindMapBranch {
  label: string;
  items: string[];
}

export interface MindMapData {
  centre: string;
  branches: MindMapBranch[];
}

const TONES = [
  "border-efe-accent bg-efe-accent-soft",
  "border-efe-gold bg-efe-gold-soft",
];

function Branch({ branch, index, side }: { branch: MindMapBranch; index: number; side: "left" | "right" | "stack" }) {
  const tone = TONES[index % TONES.length];
  return (
    <div className="relative">
      {/* connector towards the centre (md and up) */}
      {side !== "stack" && (
        <span
          aria-hidden
          className={`hidden md:block absolute top-6 h-0.5 w-6 bg-efe-line ${side === "left" ? "-right-6" : "-left-6"}`}
        />
      )}
      <div className={`rounded-xl border-l-4 ${tone} p-3 sm:p-4`}>
        <h4 className="text-sm sm:text-base font-bold text-efe-fg mb-2">{branch.label}</h4>
        <ul className="space-y-1.5">
          {branch.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-[13px] sm:text-sm leading-snug text-efe-fg">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-efe-muted" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function MindMap({ data }: { data: MindMapData }) {
  const half = Math.ceil(data.branches.length / 2);
  const left = data.branches.slice(0, half);
  const right = data.branches.slice(half);

  return (
    <figure aria-label={`Topic map: ${data.centre}`} className="w-full">
      {/* Small screens: centre on top, branches stacked */}
      <div className="md:hidden space-y-3">
        <div className="mx-auto w-fit max-w-full rounded-2xl bg-efe-fg text-efe-bg px-5 py-3 text-center font-bold font-display">
          {data.centre}
        </div>
        <div className="border-l-2 border-efe-line ml-4 pl-4 space-y-3">
          {data.branches.map((b, i) => (
            <Branch key={i} branch={b} index={i} side="stack" />
          ))}
        </div>
      </div>

      {/* md and up: left | centre | right */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-x-12 items-center">
        <div className="relative space-y-4">
          <span aria-hidden className="absolute -right-6 top-6 bottom-6 w-0.5 bg-efe-line" />
          {left.map((b, i) => (
            <Branch key={i} branch={b} index={i} side="left" />
          ))}
        </div>
        <div className="relative flex items-center">
          <span aria-hidden className="absolute -left-6 top-1/2 h-0.5 w-6 bg-efe-line" />
          <div className="max-w-[200px] rounded-2xl bg-efe-fg text-efe-bg px-5 py-4 text-center font-bold font-display leading-snug shadow-sm">
            {data.centre}
          </div>
          {right.length > 0 && <span aria-hidden className="absolute -right-6 top-1/2 h-0.5 w-6 bg-efe-line" />}
        </div>
        <div className="relative space-y-4">
          {right.length > 0 && <span aria-hidden className="absolute -left-6 top-6 bottom-6 w-0.5 bg-efe-line" />}
          {right.map((b, i) => (
            <Branch key={i} branch={b} index={half + i} side="right" />
          ))}
        </div>
      </div>
    </figure>
  );
}
