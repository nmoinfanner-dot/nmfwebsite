import { LinkedInIcon, WhatsAppIcon, EmailIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-6 lg:mt-6">
      <div className="flex items-center gap-4">
        <a
          href="https://wa.me/393384863698"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-foreground transition-opacity duration-300 ease-out hover:opacity-70"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
        <a
          href="mailto:nmoinfanner@gmai.com"
          aria-label="Email"
          className="text-foreground transition-opacity duration-300 ease-out hover:opacity-70"
        >
          <EmailIcon className="h-5 w-5" />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-foreground transition-opacity duration-300 ease-out hover:opacity-70">
          <LinkedInIcon className="h-5 w-5" />
        </a>
      </div>

      <p className="font-sans text-sm text-foreground/60">Designed by Natalia Moin Fanner</p>
    </footer>
  );
}
