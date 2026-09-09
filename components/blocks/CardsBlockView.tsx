import type { CardsBlock } from "@/lib/projectBlocks";

export function CardsBlockView({ block }: { block: CardsBlock }) {
  return (
    <div>
      <h2 className="font-heading text-2xl">{block.heading}</h2>
      {block.intro && <p className="mt-4 font-sans text-foreground/70">{block.intro}</p>}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {block.items.map((item) => (
          <div key={item.title} className="rounded-3xl bg-button-background p-6">
            <h3 className="font-heading text-lg">{item.title}</h3>
            <p className="mt-2 font-sans text-sm text-foreground/70">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
