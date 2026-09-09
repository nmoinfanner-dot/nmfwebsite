// Outline buttons: no fill, just a color line. Use the light variant on dark/colored
// blocks and the dark variant on white blocks, per the site's black/white branding.
// Fixed-pixel radius (not a % radius, which stretches unevenly on a wide short button).
export const lightButtonClasses =
  "inline-flex items-center gap-2 rounded-[10px] border-2 border-background bg-transparent px-5 py-3 font-sans font-bold text-background transition-colors duration-300 ease-out hover:bg-background/10";

export const darkButtonClasses =
  "inline-flex items-center gap-2 rounded-[10px] border-2 border-foreground bg-transparent px-5 py-3 font-sans font-bold text-foreground transition-colors duration-300 ease-out hover:bg-foreground/10";

// Underline is always present but starts transparent, so hover fades it in
// smoothly (text-decoration-line itself can't be transitioned, only its color).
export const linkClasses =
  "font-sans font-bold underline decoration-transparent underline-offset-4 transition-colors duration-300 ease-out hover:decoration-foreground";
