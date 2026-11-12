"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

const fieldClasses =
  "w-full bg-transparent font-sans text-foreground placeholder:text-foreground/50 focus:outline-none";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { form } = useLocale().common;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const formElement = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(formElement))),
      });
      if (!response.ok) throw new Error(`Contact request failed: ${response.status}`);
      formElement.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Honeypot: hidden from people, bots fill it in and get ignored. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="border-b border-foreground/30 pb-3">
        <label htmlFor="name" className="sr-only">
          {form.fullName}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={120}
          autoComplete="name"
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
          required
          maxLength={254}
          autoComplete="email"
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
          maxLength={40}
          autoComplete="tel"
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
          required
          maxLength={5000}
          placeholder={form.message}
          rows={4}
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-fit items-center gap-2 rounded-[10px] bg-foreground px-6 py-3 font-sans font-bold text-background transition-opacity duration-300 ease-out hover:opacity-80 disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? form.sending : form.send}
        <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
          →
        </span>
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`font-sans text-sm ${status === "error" ? "text-red-700" : "text-foreground/80"}`}
      >
        {status === "success" && form.success}
        {status === "error" && form.error}
      </p>
    </form>
  );
}
