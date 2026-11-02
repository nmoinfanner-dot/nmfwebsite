"use client";

import { useLocale } from "@/components/LocaleProvider";

const fieldClasses =
  "w-full bg-transparent font-sans text-foreground placeholder:text-foreground/50 focus:outline-none";

export function ContactForm() {
  const { form } = useLocale().common;

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col gap-8"
    >
      <div className="border-b border-foreground/30 pb-3">
        <label htmlFor="name" className="sr-only">
          {form.fullName}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={form.fullName}
          className={fieldClasses}
        />
      </div>

      <div className="border-b border-foreground/30 pb-3">
        <label htmlFor="email" className="sr-only">
          {form.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={form.email}
          className={fieldClasses}
        />
      </div>

      <div className="border-b border-foreground/30 pb-3">
        <label htmlFor="phone" className="sr-only">
          {form.phone}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder={form.phone}
          className={fieldClasses}
        />
      </div>

      <div className="border-b border-foreground/30 pb-3">
        <label htmlFor="message" className="sr-only">
          {form.message}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={form.message}
          rows={4}
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-fit items-center gap-2 rounded-[10px] bg-foreground px-6 py-3 font-sans font-bold text-background transition-opacity duration-300 ease-out hover:opacity-80"
      >
        {form.send}
        <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
