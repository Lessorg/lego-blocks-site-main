/**
 * SectionTag — a blueprint spec-sheet style eyebrow: index code + label,
 * set in mono, reinforcing the "engineered, precise" feel of the brand.
 */
export default function SectionTag({ index, children, tone = "graphite" }) {
  const color = tone === "orange" ? "text-orange-deep" : "text-steel";
  return (
    <div className={`flex items-center gap-3 font-mono text-xs tracking-[0.18em] uppercase ${color}`}>
      {index && <span className="text-orange-deep">{index}</span>}
      <span className="h-px w-8 bg-current opacity-40" />
      <span>{children}</span>
    </div>
  );
}
