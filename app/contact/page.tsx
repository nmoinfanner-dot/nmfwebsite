import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="bg-background px-6 py-10 sm:px-10 lg:px-[100px] lg:py-12">
      <SiteNav />

      <Reveal className="mx-auto max-w-6xl rounded-3xl bg-button-background px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-between gap-16">
            <div>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl">Contact</h1>
              <p className="mt-6 max-w-sm font-sans text-lg text-foreground/80">
                If you have a project that needs both strategic thinking and hands-on design,
                let&apos;s talk!
              </p>
            </div>

            <div>
              <h2 className="font-sans font-bold text-foreground">Business Inquiries:</h2>
              <div className="mt-3 flex flex-col gap-1 font-sans text-foreground/70">
                <a href="mailto:hello@nmoinfanner.com" className="hover:underline">
                  hello@nmoinfanner.com
                </a>
                <a
                  href="https://wa.me/393384863698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +39 338 486 3698 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Reveal>

      <div className="mt-16 lg:mt-20">
        <SiteFooter />
      </div>
    </div>
  );
}
