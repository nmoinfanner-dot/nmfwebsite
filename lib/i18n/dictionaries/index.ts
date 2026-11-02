import type { Locale } from "@/lib/i18n/config";
import { en, type Dictionary } from "./en";
import { es } from "./es";
import { it } from "./it";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { en, es, it };
