import { LINKEDIN_URL, SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";
import { getDictionary } from "@/lib/i18n/server";

const personId = `${SITE_URL}/#person`;
const serviceId = `${SITE_URL}/#professional-service`;

const address = {
  "@type": "PostalAddress",
  addressLocality: "Milan",
  addressCountry: "IT",
};

export async function StructuredData() {
  const { site, structured } = await getDictionary();
  const { description, services, sectors, catalogName } = structured;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: SITE_NAME,
        jobTitle: site.role,
        description,
        url: SITE_URL,
        email: SITE_EMAIL,
        address,
        knowsAbout: [...services, ...sectors],
        sameAs: [LINKEDIN_URL],
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: SITE_NAME,
        description,
        url: SITE_URL,
        email: SITE_EMAIL,
        logo: `${SITE_URL}/icon.png`,
        founder: { "@id": personId },
        address,
        areaServed: [
          { "@type": "Place", name: "Europe" },
          { "@type": "Country", name: "United States" },
        ],
        serviceType: services,
        knowsAbout: sectors,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: catalogName,
          itemListElement: services.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
        sameAs: [LINKEDIN_URL],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
