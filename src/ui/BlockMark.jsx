/**
 * BlockMark — isometric interlocking-block logomark.
 * Two stacked blocks with stud connectors, echoing the product itself.
 */
export default function BlockMark({ className = "", tone = "graphite" }) {
  const main = tone === "orange" ? "#F9590F" : "#161616";
  const dark = tone === "orange" ? "#C13E0A" : "#0A0A0A";

  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* bottom block */}
      <path d="M4 26L22 17L40 26L22 35L4 26Z" fill={main} />
      <path d="M4 26V31L22 40V35L4 26Z" fill={dark} />
      <path d="M40 26V31L22 40V35L40 26Z" fill={main} opacity="0.75" />
      {/* studs on top block */}
      <circle cx="22" cy="8" r="3.4" fill={main} />
      <circle cx="14" cy="12" r="3.4" fill={main} />
      <circle cx="30" cy="12" r="3.4" fill={main} />
      {/* top block */}
      <path d="M8 17L22 10L36 17L22 24L8 17Z" fill="#F9590F" />
      <path d="M8 17V20L22 27V24L8 17Z" fill="#C13E0A" />
      <path d="M36 17V20L22 27V24L36 17Z" fill="#F9590F" opacity="0.8" />
    </svg>
  );
}
