"use client";

const fieldClasses =
  "w-full bg-transparent font-sans text-foreground placeholder:text-foreground/50 focus:outline-none";

export function ContactForm() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col gap-8"
    >
      <div className="border-b border-foreground/30 pb-3">
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input id="name" name="name" type="text" placeholder="Full Name" className={fieldClasses} />
      </div>

      <div className="border-b border-foreground/30 pb-3">
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          className={fieldClasses}
        />
      </div>

      <div className="border-b border-foreground/30 pb-3">
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className={fieldClasses}
        />
      </div>

      <div className="border-b border-foreground/30 pb-3">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={4}
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-fit items-center gap-2 rounded-[10px] bg-foreground px-6 py-3 font-sans font-bold text-background transition-opacity duration-300 ease-out hover:opacity-80"
      >
        Send Message
        <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
