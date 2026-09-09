import type { UiStyleBlock } from "@/lib/projectBlocks";

export function UiStyleBlockView({ block }: { block: UiStyleBlock }) {
  return (
    <div>
      {block.fontLinkHref && <link rel="stylesheet" href={block.fontLinkHref} />}
      <h2 className="font-heading text-2xl">{block.heading}</h2>
      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex flex-wrap gap-6">
            {block.colors.map((color, index) => (
              <div key={`${color.label}-${index}`} className="flex flex-col items-center gap-2">
                <div
                  className="h-16 w-16 rounded-full border border-foreground/10"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="font-sans text-xs font-bold text-foreground">
                  {color.label}
                </span>
                <span className="font-sans text-xs text-foreground/50">{color.hex}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-sans text-foreground/80">
            <span className="font-bold">Typeface:</span> {block.typefaceName}
          </p>
        </div>
        <div
          className="flex aspect-[4/3] flex-col justify-center gap-4 rounded-3xl p-8"
          style={{ backgroundColor: block.specimenBackground }}
        >
          <p className="text-foreground/70" style={{ fontFamily: block.fontFamily, fontSize: "15px" }}>
            {block.weightsLabel}
          </p>
          <p
            className="font-bold text-foreground"
            style={{ fontFamily: block.fontFamily, fontSize: "40px" }}
          >
            {block.typefaceName}
          </p>
          <p className="text-foreground/70" style={{ fontFamily: block.fontFamily, fontSize: "14px" }}>
            {block.specimenText}
          </p>
        </div>
      </div>
    </div>
  );
}
