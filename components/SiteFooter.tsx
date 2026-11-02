"use client";

import { LinkedInIcon, WhatsAppIcon, EmailIcon } from "@/components/icons";
import { useLocale } from "@/components/LocaleProvider";

export function SiteFooter() {
  const { footer } = useLocale().common;

  return (
    <footer className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-6 lg:mt-6">
      <div className="flex items-center gap-4">
        <a
          href="https://wa.me/393384863698"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={footer.whatsapp}
          className="text-foreground transition-opacity duration-300 ease-out hover:opacity-70"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
        <a
          href="mailto:hello@nmoinfanner.com"
          aria-label={footer.email}
          className="text-foreground transition-opacity duration-300 ease-out hover:opacity-70"
        >
          <EmailIcon className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/natalia-moin-fanner-142982147"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={footer.linkedin}
          className="text-foreground transition-opacity duration-300 ease-out hover:opacity-70"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
      </div>

      <p className="font-sans text-sm text-foreground/60">{footer.designedBy}</p>
    </footer>
  );
}
