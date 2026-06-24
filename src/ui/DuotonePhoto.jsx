/**
 * DuotonePhoto — the page's signature visual treatment.
 *
 * Every photograph on the site (hero, about, products, gallery) is run
 * through the same graphite → orange duotone with a fine halftone
 * aggregate-dot overlay, so a set of otherwise unrelated job-site photos
 * reads as one consistent, branded industrial print identity instead of
 * a generic stock-photo grid. Swap the `seed` prop for real photography
 * later — the treatment (and the brand feel) stays identical.
 */
export default function DuotonePhoto({
  src,
  seed,
  alt,
  className = "",
  imgClassName = "",
  width = 900,
  height = 700,
  priority = false,
}) {
  const imgSrc = src ?? `https://picsum.photos/seed/${seed}/${width}/${height}`;

  return (
    <div className={`relative overflow-hidden bg-graphite ${className}`}>
      <img
        src={imgSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`h-full w-full object-cover grayscale contrast-[1.12] brightness-[0.85] ${imgClassName}`}
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-color"
        style={{
          background: "linear-gradient(155deg, #161616 18%, #f9590f 130%)",
        }}
      />
      <div className="halftone pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
    </div>
  );
}
