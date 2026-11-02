import { LINKEDIN_URL, SITE_EMAIL, SITE_NAME, SITE_ROLE, SITE_URL } from "@/lib/site";

const personId = `${SITE_URL}/#person`;
const serviceId = `${SITE_URL}/#professional-service`;

const services = ["Brand identity", "Web design", "Motion graphics"];
const sectors = ["Renewable energy", "Sustainability", "Hospitality and experiences"];

const address = {
  "@type": "PostalAddress",
  addressLocality: "Milan",
  addressCountry: "IT",
};

const description = `${SITE_NAME} is a ${SITE_ROLE.toLowerCase()} based in Milan, Italy, working remotely with clients in Europe and the United States. Services: ${services
  .join(", ")
  .toLowerCase()}. Sectors: ${sectors.join(", ").toLowerCase()}.`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: SITE_NAME,
      jobTitle: SITE_ROLE,
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
        name: "Design services",
        itemListElement: services.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
      sameAs: [LINKEDIN_URL],
    },
  ],
};

export function StructuredData() {
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
