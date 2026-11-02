import type { ProjectDetail } from "@/lib/projectBlocks";
import { format, type Locale } from "@/lib/i18n/config";
import coverImage from "@/assets/images/project/duracell/duracell.png";
import socialDuracellImage from "@/assets/images/project/duracell/social-duracell.jpg";
import ivGraphic1 from "@/assets/images/project/duracell/iv-graphic-01.jpg";
import ivGraphic2 from "@/assets/images/project/duracell/iv-graphic-02.jpg";
import ivGraphic3 from "@/assets/images/project/duracell/iv-graphic-03.jpg";
import ivGraphic4 from "@/assets/images/project/duracell/iv-graphic-04.jpg";
import ivGraphic5 from "@/assets/images/project/duracell/iv-graphic-05.jpg";
import ivGraphic6 from "@/assets/images/project/duracell/iv-graphic-06.jpg";
import result1 from "@/assets/images/project/duracell/result-01.jpg";
import result2 from "@/assets/images/project/duracell/result-02.jpg";
import result3 from "@/assets/images/project/duracell/result-03.jpg";

const en = {
  subtitle: "Two brands, two different starting points, one job: make it perform.",
  seoTitle: "Duracell + ISBUSA Case Study",
  seoDescription:
    "Paid social case study for Duracell and ISBUSA: $483 in ad spend became $32,873 in revenue, and a full-funnel strategy delivered a 28x return on ad spend.",
  intro:
    "Two retail accounts from my time at Blue Edge, grouped together because they prove the same point from opposite directions. Duracell needed performance inside a brand system I didn't control. ISBUSA had no system at all, so I built one first, then proved it through paid social. This case covers the strategy and creative behind both.",
  fields: {
    role: "Role",
    roleValue: "End-to-end Senior designer",
    client: "Client",
    duration: "Project Duration",
    durationValue: "2 years",
    year: "Year",
  },
  challengeHeading: "The Challenge",
  challenges: [
    "Duracell came with a mandatory brand system already set by the client, no creative freedom, performance had to come from execution alone",
    "ISBUSA had no brand guidelines at all, nothing to build campaigns on top of",
    "Both needed paid social that actually converted, not just posted",
  ],
  roleHeading: "My Role",
  roles: [
    "Duracell: Built and ran the paid social and organic content strategy inside the client's existing brand guidelines, content calendars, on-brand creative, full-funnel Facebook and Instagram Ads, plus ongoing SEO work",
    "ISBUSA: Created the brand guidelines from scratch, then built and directed a full-funnel paid social strategy on top of them, prospecting, nurture, retargeting, brand awareness",
  ],
  socialWideAlt: "Duracell + ISBUSA social media, wide format",
  socialHeading: "Social Media",
  graphicAlt: "ISBUSA social media graphic {n}",
  resultHeading: "The Result",
  results: [
    "Duracell: Turned $483 in ad spend into $32,873 in revenue in a single month, a 68x return strong enough to become the agency's own case study",
    "ISBUSA: Delivered a 28x return on ad spend and reached 87,700+ people through the full-funnel system",
  ],
  resultAlt: "Duracell + ISBUSA result {n}",
};

type Copy = typeof en;

const es: Copy = {
  subtitle: "Dos marcas, dos puntos de partida distintos, un mismo trabajo: hacerlas rendir.",
  seoTitle: "Caso de estudio Duracell + ISBUSA",
  seoDescription:
    "Caso de estudio de paid social para Duracell e ISBUSA: 483 USD de inversión publicitaria se convirtieron en 32.873 USD de ingresos, y una estrategia de embudo completo logró un retorno de 28x.",
  intro:
    "Dos cuentas de retail de mi etapa en Blue Edge, agrupadas porque demuestran lo mismo desde direcciones opuestas. Duracell necesitaba rendimiento dentro de un sistema de marca que yo no controlaba. ISBUSA no tenía ningún sistema, así que primero construí uno y luego lo demostré con paid social. Este caso cubre la estrategia y la creatividad detrás de ambas.",
  fields: {
    role: "Rol",
    roleValue: "Diseñadora senior de principio a fin",
    client: "Cliente",
    duration: "Duración del proyecto",
    durationValue: "2 años",
    year: "Año",
  },
  challengeHeading: "El desafío",
  challenges: [
    "Duracell venía con un sistema de marca obligatorio ya definido por el cliente, sin libertad creativa: el rendimiento tenía que venir solo de la ejecución",
    "ISBUSA no tenía ninguna guía de marca, nada sobre lo que construir campañas",
    "Ambas necesitaban paid social que realmente convirtiera, no solo que se publicara",
  ],
  roleHeading: "Mi rol",
  roles: [
    "Duracell: construí y gestioné la estrategia de paid social y contenido orgánico dentro de las guías de marca existentes del cliente: calendarios de contenido, creatividad fiel a la marca, anuncios de Facebook e Instagram de embudo completo y trabajo continuo de SEO",
    "ISBUSA: creé las guías de marca desde cero y luego construí y dirigí sobre ellas una estrategia de paid social de embudo completo: prospección, nutrición, retargeting y awareness de marca",
  ],
  socialWideAlt: "Redes sociales de Duracell + ISBUSA, formato panorámico",
  socialHeading: "Redes sociales",
  graphicAlt: "Gráfica de redes sociales de ISBUSA {n}",
  resultHeading: "El resultado",
  results: [
    "Duracell: convertí 483 USD de inversión publicitaria en 32.873 USD de ingresos en un solo mes, un retorno de 68x lo bastante fuerte como para convertirse en el caso de estudio de la propia agencia",
    "ISBUSA: logré un retorno de 28x sobre la inversión publicitaria y un alcance de más de 87.700 personas gracias al sistema de embudo completo",
  ],
  resultAlt: "Resultado de Duracell + ISBUSA {n}",
};

const it: Copy = {
  subtitle: "Due brand, due punti di partenza diversi, un solo obiettivo: farli rendere.",
  seoTitle: "Case study Duracell + ISBUSA",
  seoDescription:
    "Case study di paid social per Duracell e ISBUSA: 483 $ di spesa pubblicitaria sono diventati 32.873 $ di ricavi e una strategia full-funnel ha portato un ritorno di 28x.",
  intro:
    "Due account retail del mio periodo in Blue Edge, raggruppati perché dimostrano lo stesso concetto da direzioni opposte. Duracell aveva bisogno di performance dentro un sistema di brand che non controllavo. ISBUSA non aveva alcun sistema, quindi ne ho costruito uno e poi l'ho dimostrato con il paid social. Questo caso racconta la strategia e la creatività dietro entrambi.",
  fields: {
    role: "Ruolo",
    roleValue: "Senior designer a 360°",
    client: "Cliente",
    duration: "Durata del progetto",
    durationValue: "2 anni",
    year: "Anno",
  },
  challengeHeading: "La sfida",
  challenges: [
    "Duracell aveva un sistema di brand obbligatorio già definito dal cliente, nessuna libertà creativa: le performance dovevano arrivare solo dall'esecuzione",
    "ISBUSA non aveva alcuna linea guida di brand, niente su cui costruire le campagne",
    "Entrambi avevano bisogno di paid social che convertisse davvero, non solo che venisse pubblicato",
  ],
  roleHeading: "Il mio ruolo",
  roles: [
    "Duracell: ho costruito e gestito la strategia di paid social e di contenuti organici all'interno delle linee guida di brand esistenti del cliente: calendari editoriali, creatività coerente con il brand, annunci Facebook e Instagram full-funnel e lavoro continuo di SEO",
    "ISBUSA: ho creato le linee guida di brand da zero, poi ho costruito e diretto sopra di esse una strategia di paid social full-funnel: prospecting, nurturing, retargeting e brand awareness",
  ],
  socialWideAlt: "Social media di Duracell + ISBUSA, formato panoramico",
  socialHeading: "Social media",
  graphicAlt: "Grafica social media di ISBUSA {n}",
  resultHeading: "Il risultato",
  results: [
    "Duracell: ho trasformato 483 $ di spesa pubblicitaria in 32.873 $ di ricavi in un solo mese, un ritorno di 68x abbastanza forte da diventare il case study dell'agenzia stessa",
    "ISBUSA: ho ottenuto un ritorno di 28x sulla spesa pubblicitaria e una copertura di oltre 87.700 persone grazie al sistema full-funnel",
  ],
  resultAlt: "Risultato di Duracell + ISBUSA {n}",
};

const copy: Record<Locale, Copy> = { en, es, it };

export function duracellIsbusa(lang: Locale): ProjectDetail {
  const c = copy[lang];
  const graphicAlt = (n: number) => format(c.graphicAlt, { n: String(n) });
  const resultAlt = (n: number) => format(c.resultAlt, { n: String(n) });

  return {
    slug: "duracell-isbusa",
    title: "Duracell + ISBUSA",
    subtitle: c.subtitle,
    coverImage,
    seo: { title: c.seoTitle, description: c.seoDescription },
    nextProjectSlugs: ["motion", "live-oak"],
    blocks: [
      {
        type: "meta",
        paragraph: c.intro,
        fields: [
          { label: c.fields.role, value: c.fields.roleValue },
          { label: c.fields.client, value: "Duracell + ISBUSA" },
          { label: c.fields.duration, value: c.fields.durationValue },
          { label: c.fields.year, value: "2024/25" },
        ],
      },
      {
        type: "keyDecisions",
        heading: c.challengeHeading,
        layout: "cards",
        columns: 3,
        items: c.challenges,
      },
      {
        type: "keyDecisions",
        heading: c.roleHeading,
        items: c.roles,
      },
      {
        type: "gallery",
        columns: 1,
        aspect: "landscape",
        images: [{ src: socialDuracellImage, alt: c.socialWideAlt }],
      },
      {
        type: "mosaic",
        heading: c.socialHeading,
        items: [
          { kind: "image", src: ivGraphic1, alt: graphicAlt(1) },
          { kind: "image", src: ivGraphic2, alt: graphicAlt(2) },
          { kind: "image", src: ivGraphic3, alt: graphicAlt(3) },
          { kind: "image", src: ivGraphic4, alt: graphicAlt(4) },
          { kind: "image", src: ivGraphic5, alt: graphicAlt(5) },
          { kind: "image", src: ivGraphic6, alt: graphicAlt(6) },
        ],
      },
      {
        type: "keyDecisions",
        heading: c.resultHeading,
        items: c.results,
      },
      {
        type: "gallery",
        columns: 3,
        images: [
          { src: result1, alt: resultAlt(1) },
          { src: result2, alt: resultAlt(2) },
          { src: result3, alt: resultAlt(3) },
        ],
      },
    ],
  };
}
