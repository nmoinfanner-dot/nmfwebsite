// English is the source language: es.ts and it.ts must match this shape
// (the Dictionary type below is derived from it).
export const en = {
  site: {
    role: "Senior Brand & Web Designer",
    defaultDescription:
      "Senior brand and web designer in Milan with 8+ years of experience building brand identities and websites for clients across Europe and the US.",
  },

  seo: {
    home: {
      title: "Portfolio",
      description:
        "Portfolio of Natalia Moin Fanner, a senior brand and web designer in Milan. Brand identities, websites and motion for clients across Europe and the US.",
    },
    about: {
      title: "About",
      description:
        "Meet Natalia Moin Fanner, a senior designer with 8+ years of experience in brand identity, web design and motion, working with agencies, founders and brands.",
    },
    services: {
      title: "Services",
      description:
        "Brand identity, graphic design, web design and motion design by Natalia Moin Fanner. Visual systems that stay consistent across every touchpoint, end to end.",
    },
    pricing: {
      title: "Pricing",
      description:
        "Brand identity and web design packages starting at €2,990. Clear pricing for small businesses, with a tailored proposal for every project.",
    },
    projects: {
      title: "Selected Work",
      description:
        "Brand identity, web design, social media and motion projects by Natalia Moin Fanner, from a trekking retreat in Italy to a solar brand in the Caribbean.",
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with Natalia Moin Fanner for brand identity, web design or motion projects. Based in Milan, working remotely with clients in Europe and the US.",
    },
    projectFallbackDescription: "A project by Natalia Moin Fanner.",
  },

  structured: {
    description:
      "Natalia Moin Fanner is a senior brand & web designer based in Milan, Italy, working remotely with clients in Europe and the United States. Services: brand identity, web design, motion graphics. Sectors: renewable energy, sustainability, hospitality and experiences.",
    services: ["Brand identity", "Web design", "Motion graphics"],
    sectors: ["Renewable energy", "Sustainability", "Hospitality and experiences"],
    catalogName: "Design services",
  },

  common: {
    nav: {
      homeAriaLabel: "Natalia Moin Fanner - Home",
      menu: "Menu",
      close: "Close",
      language: "Language",
      links: {
        about: "About Me",
        projects: "Project",
        services: "Services",
        pricing: "Pricing",
        contact: "Contact",
      },
    },
    footer: {
      designedBy: "Designed by Natalia Moin Fanner",
      whatsapp: "WhatsApp",
      email: "Email",
      linkedin: "LinkedIn",
    },
    cta: {
      title: "Have a project in mind?",
      start: "Start a project",
      getInTouch: "Get in touch",
    },
    form: {
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Message",
      send: "Send Message",
    },
    zoom: {
      expand: "Expand {alt}",
      close: "Close",
    },
    projects: {
      all: "All",
      categories: {
        Branding: "Branding",
        "Web Design": "Web Design",
        "Social Media": "Social Media",
        "Graphic Design": "Graphic Design",
      } as Record<string, string>,
      previewAlt: "{title} project preview",
      coverAlt: "{title} project cover",
    },
  },

  home: {
    watermarkName: "Natalia Moin Fanner",
    watermarkRole: "Senior Web/Graphic Designer",
    pricingTitle: "Packages & pricing",
    pricingText: "Three clear starting points, from launch to full brand presence.",
    pricingButton: "See packages",
    servicesAlt: "Laptop on a desk showing a website wireframe next to a coffee cup and headphones",
    servicesAria: "Go to services",
    servicesTitle: "Check my services",
    eyebrow: "Senior Designer, Brand & Web",
    headline: "BUILT TO COMMUNICATE. NOT JUST TO IMPRESS.",
    intro:
      "8+ years designing brand identities and websites that hold up under scrutiny, whether that means leading a project solo or plugging straight into your team.",
    viewWork: "View my work",
    recentTitle: "Recent Projects",
    recentText: "From concept to completion, these projects highlight my expertise.",
    recentLink: "See all projects",
    greeting: "Hi, I'm Natalia",
    portraitAlt: "Portrait of Natalia Moin Fanner, senior brand and web designer",
    aboutButton: "More about me",
    location: "Based in Milan, Remote",
    contactAlt: "Partly open laptop on a desk, its screen casting colorful light over the keyboard",
    contactTitle: "Have a project in mind?",
    contactLink: "Get in touch",
  },

  about: {
    eyebrow: "Senior Designer, Brand & Web",
    leftStats: [
      { value: "8+", label: "Years of Experience" },
      { value: "5,500+", label: "Leads Generated" },
      { value: "28x", label: "Return on Ad Spend" },
    ],
    rightStats: [
      { value: "4", label: "Global Brands" },
      { value: "3", label: "Person Team Managed" },
      { value: "3", label: "Languages Spoken" },
    ],
    portraitAlt: "Portrait of Natalia Moin Fanner, senior brand and web designer",
    bio: "Senior designer with 8+ years building brand identities and websites for companies across the US and Europe. I don't design in pieces, I design decisions: every choice is tied to a business outcome, whether that's ad performance, conversion, or how clearly a brand communicates.",
    howIWorkTitle: "How I Work",
    workSteps: [
      {
        heading: "Understand",
        paragraph:
          "Every project starts the same way: before I open Figma, I need to understand what your business does, who your users are, and what the page needs to communicate.",
      },
      {
        heading: "Design",
        paragraph:
          "I present one well-reasoned design direction, not three to pick from, with clear rationale behind every decision: layout, typography, color, hierarchy, refined together with you.",
      },
      {
        heading: "Deliver",
        paragraph:
          "A structured Figma file: named layers, reusable components, desktop and mobile always included, ready for your developer to build from. No surprises at handoff.",
      },
    ],
    jobsTitle: "Job Experience",
    jobs: [
      {
        company: "Blue Edge Business Solutions",
        role: "Creative Director",
        location: "Remote, Savannah, Georgia",
        years: "2021 - 2026",
        description:
          "Led design and creative direction for a full-service digital marketing agency. Directed multi-year brand work for Prosolar (5,500+ leads from two Meta campaigns), Duracell (turned $483 in ad spend into $32,873 in monthly revenue), and ISBUSA (28x return on ad spend, reaching 87,700+ people).",
      },
      {
        company: "R/GA",
        role: "Motion Graphic Designer",
        location: "Remote, San Francisco / Buenos Aires",
        years: "2020 - 2022",
        description:
          "Created motion design for global brand campaigns for Google, Shopify, Nike, and Patagonia, working day to day with R/GA's motion team in California while representing the Buenos Aires studio.",
      },
      {
        company: "Independent",
        role: "Freelance Senior Designer",
        location: "Remote, US & Europe",
        years: "2020 - Present",
        description:
          "Running an independent practice in parallel with agency roles, building brands and websites for founders and small businesses, including a full site rebuild for Verge Yacht Design and ModoMio's brand and digital presence from zero.",
      },
    ],
    skillsTitle: "Skills & Tools",
    volunteeringTitle: "Volunteering",
    volunteerTags: ["Graphic Design", "UNHCR Spanish Committee", "Science & Technology"],
    volunteerHeading: "Spanish Learning App for Refugees",
    volunteerText:
      "Working with classmates and professors from the Faculty of Architecture, Design and Urbanism, I helped design an app to help refugees learn practical Spanish through exercises built by the Faculty of Philosophy. Most refugees had phones but couldn't attend in-person classes while working, so the app focused on real situations: housing, health, shopping, paperwork, and transportation, giving people more confidence to apply for jobs, rent a home, or go shopping.",
    testimonialsTitle: "Client Testimonials",
    testimonials: [
      {
        quote:
          "I worked with Natalia for six years at Blue Edge Business Solutions, and she was one of the most valuable people on our team. As creative director and senior web designer, she owned brand identity and web projects end to end, and she always started from the communication problem rather than the visual. She moved fluently between brand systems, web design, and motion, delivered on time, and raised the standard of craft for everyone around her.",
        name: "Federico Calì",
        role: "Principal @ Blue Edge Business Solutions",
        initials: "FC",
      },
      {
        quote:
          "Natalia has strong creative range and always looks to add value and quality to every project, pushing them beyond expectations. She's highly organized, meticulous, and works well in a team, getting involved in every part of the process. Working with her was genuinely rewarding.",
        name: "Samanta Corredoira",
        role: "Directora Creativa en RAPP Argentina",
        initials: "SC",
      },
    ],
  },

  services: {
    title: "How I Elevate Your Brand",
    included: "What's included",
    items: [
      {
        heading: "Brand Identity",
        paragraph:
          "Visual identity systems that work across every touchpoint: logo, color, typography, guidelines, and applications. Not just a logo. A system.",
        list: [
          "Naming and brand strategy (when needed)",
          "Logo and visual identity system",
          "Color, typography, and usage guidelines",
          "Brand applications across web, social, print, and merchandise",
        ],
        alt: "Black Cresta water bottle next to worn hiking boots on a mountain trail, part of a brand identity",
      },
      {
        heading: "Graphic Design",
        paragraph:
          "From landing pages to social media to print collateral, design that carries your brand consistently across formats and channels.",
        list: [
          "Social media content systems",
          "Print and digital collateral",
          "Campaign creative",
          "Presentation and pitch deck design",
        ],
        alt: "Cresta brand applications: logo apron, framed welcome card, menu folder and chalkboard sign",
      },
      {
        heading: "Web Design",
        paragraph:
          "Full website design, from structure and content hierarchy to visual language and interaction. Built around how your users actually think, not how you want to be seen.",
        list: [
          "UX research and structure",
          "Full desktop and mobile design in Figma",
          "Interactive prototypes",
          "Framer or Next.js implementation",
        ],
        alt: "Live Oak Veterinary website designed by Natalia Moin Fanner, shown on a laptop screen",
      },
      {
        heading: "Motion Design",
        paragraph:
          "Video, animation, and 3D used with intention, adding movement where it clarifies, not just decorates.",
        list: [
          "Animated logos and brand intros",
          "Social media motion content",
          "3D elements and illustration",
          "Video editing and post-production",
        ],
        alt: "",
      },
    ],
  },

  pricing: {
    title: "Pricing",
    subtitle: "Clear starting points for brands that want to look as good as they work.",
    subtitleStrong: "Every project gets a tailored proposal.",
    mostPopular: "Most popular",
    letsTalk: "Let's talk",
    packages: [
      {
        label: "PACKAGE 1",
        name: "Launch",
        description: "For new businesses that need to show up properly from day one.",
        price: "Starting at €2,990",
        features: [
          "Logo system with the reasoning behind it",
          "Color palette and typography",
          "Essential brand guidelines",
          "One-page website with contact form",
          "10 editable social media templates",
        ],
      },
      {
        label: "PACKAGE 2",
        name: "Brand & Web",
        description: "For businesses ready for a complete, consistent identity.",
        price: "Starting at €5,200",
        features: [
          "Full brand identity and guidelines",
          "Image direction and custom icon set",
          "Stationery and email signature",
          "3 to 5 page website with contact form",
          "Responsive design and basic SEO",
        ],
      },
      {
        label: "PACKAGE 3",
        name: "Full Presence",
        description: "For brands that want every touchpoint working together.",
        price: "Starting at €7,200",
        features: [
          "Everything in Brand & Web",
          "6 to 10 page website with blog or CMS",
          "Animated logo for web, video and social",
          "10 editable social media templates",
          "30 days of support after launch",
        ],
      },
    ],
    footnote:
      "* Don't need the full package? Single services are available too. Just tell me what you're looking for.",
    closingTitle: "Need something specific?",
    closingText:
      "Every brand is different, and so is every project. Tell me what you have in mind and I'll put together a proposal that fits your goals and budget.",
  },

  projectsPage: {
    title: "Selected Work",
  },

  contact: {
    title: "Contact",
    intro:
      "If you have a project that needs both strategic thinking and hands-on design, let's talk!",
    inquiries: "Business Inquiries:",
  },

  projectTemplate: {
    nextProject: "Next Project",
    comingSoon: "Full case study coming soon.",
    back: "Back to projects",
    projectVideo: "Project video",
  },
};

export type Dictionary = typeof en;
