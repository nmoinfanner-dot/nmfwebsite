import { darkButtonClasses } from "@/components/buttons";
import type { MetaBlock } from "@/lib/projectBlocks";

export function MetaBlockView({ block }: { block: MetaBlock }) {
  const hasIntro = Boolean(block.heading || block.paragraph);

  const fieldsCard = (
    <div className="flex flex-col gap-4 rounded-3xl bg-button-background p-6">
      <dl className="flex flex-col gap-4">
        {block.fields.map((field) => (
          <div key={field.label}>
            <dt className="font-sans text-xs font-bold uppercase tracking-widest text-foreground/50">
              {field.label}
            </dt>
            <dd className="font-sans font-bold text-foreground">{field.value}</dd>
          </div>
        ))}
      </dl>
      {block.cta && (
        <a
          href={block.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${darkButtonClasses} mt-2 justify-center`}
        >
          {block.cta.label}
        </a>
      )}
    </div>
  );

  if (!hasIntro) {
    return <div className="max-w-md">{fieldsCard}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr] lg:items-center">
      <div>
        {block.heading && <h2 className="font-heading text-2xl">{block.heading}</h2>}
        {block.paragraph &&
          (Array.isArray(block.paragraph) ? block.paragraph : [block.paragraph]).map(
            (paragraph, index) => (
              <p
                key={paragraph}
                className={`font-sans text-foreground/80 ${index > 0 || block.heading ? "mt-4" : ""}`}
              >
                {paragraph}
              </p>
            ),
          )}
        {block.sections?.map((section) => (
          <div key={section.heading} className="mt-4">
            <h3 className="font-heading text-lg">{section.heading}</h3>
            <p className="mt-2 font-sans text-foreground/80">{section.paragraph}</p>
          </div>
        ))}
      </div>
      {fieldsCard}
    </div>
  );
}
