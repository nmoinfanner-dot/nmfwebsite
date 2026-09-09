import Image from "next/image";
import type { KeyDecisionsBlock } from "@/lib/projectBlocks";

// If an item starts with "Label: rest", split it out (the label is bolded).
function parseItem(item: string): { label: string | null; text: string } {
  const match = item.match(/^([^:]{1,40}):\s([\s\S]*)$/);
  if (!match) return { label: null, text: item };
  return { label: match[1], text: match[2] };
}

const gridColsClass: Record<NonNullable<KeyDecisionsBlock["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-5",
};

function CardsGrid({ block }: { block: KeyDecisionsBlock }) {
  const columns = block.columns ?? 4;
  return (
    <>
      <div className={`mt-6 grid grid-cols-1 gap-6 ${gridColsClass[columns]}`}>
        {block.items.map((item) => {
          const { label, text } = parseItem(item);
          return (
            <div key={item} className="rounded-3xl bg-button-background p-6">
              {label && <h3 className="font-heading text-lg">{label}</h3>}
              <p className={`font-sans text-sm text-foreground/70 ${label ? "mt-2" : ""}`}>
                {text}
              </p>
            </div>
          );
        })}
      </div>
      {block.bottomImage && (
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-accent/20">
          {block.bottomImage.src && (
            <Image
              src={block.bottomImage.src}
              alt={block.bottomImage.alt}
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-cover"
            />
          )}
        </div>
      )}
    </>
  );
}

function BulletsList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-3">
      {items.map((item) => {
        const { label, text } = parseItem(item);
        return (
          <li key={item} className="flex gap-3 font-sans text-foreground/80">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              {label && <span className="font-bold text-foreground">{label}:</span>} {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function KeyDecisionsBlockView({ block }: { block: KeyDecisionsBlock }) {
  if (block.layout === "cards") {
    return (
      <div>
        <h2 className="font-heading text-2xl">{block.heading}</h2>
        <CardsGrid block={block} />
      </div>
    );
  }

  if (!block.image) {
    return (
      <div>
        <h2 className="font-heading text-2xl">{block.heading}</h2>
        <BulletsList items={block.items} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-x-12">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-accent/20">
        {block.image.src && (
          <Image
            src={block.image.src}
            alt={block.image.alt}
            fill
            sizes="(min-width: 1024px) 32rem, 100vw"
            className="object-cover"
          />
        )}
      </div>
      <div>
        <h2 className="font-heading text-2xl">{block.heading}</h2>
        <BulletsList items={block.items} />
      </div>
    </div>
  );
}
