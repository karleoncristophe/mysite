export type SiteConfig = typeof siteConfig;

const RESOLVED_SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://karleoncristophe.com.br"
)
  .trim()
  .replace(/\/$/, "");
const RESOLVED_OG_IMAGE = (process.env.NEXT_PUBLIC_OG_IMAGE ?? "").trim();
const GOOGLE_SITE_VERIFICATION = (
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? ""
).trim();

export const siteConfig = {
  name: "Karleon Cristophe",
  givenName: "Karleon",
  familyName: "Cristophe",
  jobTitle: "Fullstack Developer",
  tagline: "Desenvolvedor Fullstack Freelance",
  description:
    "Desenvolvedor fullstack freelancer no Rio de Janeiro. Criação de sites, aplicativos mobile e landing pages com React, Next.js, Node.js e React Native.",
  shortDescription:
    "Programador web/mobile freelancer. Sites, aplicativos e landing pages com React, Next.js e Node.js.",
  url: RESOLVED_SITE_URL,
  ogImage: RESOLVED_OG_IMAGE,
  googleSiteVerification: GOOGLE_SITE_VERIFICATION,
  locale: "pt_BR",
  language: "pt-BR",
  twitter: "@karleoncris",
  phone: "+5521997058459",
  phoneDisplay: "(21) 99705-8459",
  whatsapp: "https://wa.me/5521997058459",
  location: {
    locality: "Rio de Janeiro",
    region: "RJ",
    country: "BR",
    countryName: "Brasil",
  },
  sameAs: [
    "https://github.com/karleoncristophe",
    "https://www.linkedin.com/in/karleoncristophe",
    "https://twitter.com/karleoncris",
    "https://www.instagram.com/karleoncristophe/",
  ],
  keywords: [
    "Karleon Cristophe",
    "desenvolvedor fullstack",
    "programador freelancer",
    "criação de sites",
    "aplicativos mobile",
    "landing pages",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "Node.js",
    "React Native",
    "programador Rio de Janeiro",
    "desenvolvimento web",
    "frontend",
    "backend",
  ],
  nav: [
    { name: "Home", href: "/#home", group: "Site" },
    { name: "Quem Sou", href: "/#quemsou", group: "Site" },
    { name: "Habilidades", href: "/#habilidades", group: "Site" },
    { name: "Projetos", href: "/#projetos", group: "Site" },
    { name: "Contato", href: "/#contato", group: "Site" },
  ],
} as const;
