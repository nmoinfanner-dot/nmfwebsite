export function ContactCta() {
  return (
    <section className="flex flex-col items-center gap-6 px-8 py-16 text-center text-foreground sm:px-12">
      <h2 className="font-heading text-3xl sm:text-4xl">Have a project in mind?</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://wa.me/393384863698"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[10px] bg-button-background px-5 py-3 font-sans font-bold text-foreground transition-opacity duration-300 ease-out hover:opacity-80"
        >
          Start a project
        </a>
        <a
          href="mailto:hello@nmoinfanner.com"
          className="rounded-[10px] bg-accent px-5 py-3 font-sans font-bold text-foreground transition-opacity duration-300 ease-out hover:opacity-80"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
