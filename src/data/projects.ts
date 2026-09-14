export interface Project {
  id: string;
  title: string;
  company: string;
  location: string;
  description?: string;
  type: string;
  tech: string[];
  accent: string;
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  tilt: number;
  links: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "gurgel-tech",
    title: "Desenvolvedor Full-Stack",
    company: "Gurgel Tech",
    location: "Rio de Janeiro · Remota",
    description:
      "Desenvolvimento de aplicações full-stack utilizando JavaScript, React Native e GraphQL para criação de soluções mobile e web integradas.",
    type: "Produto · Web / Mobile",
    tech: ["React Native", "GraphQL", "JavaScript"],
    accent: "#4EA8FF",
    orbitRadius: 4.4,
    orbitSpeed: 0.11,
    size: 0.42,
    tilt: 0.18,
    links: [
      { label: "Meu Catálogo — Website", url: "https://meucatalogo.app/" },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=app.meucatalogo",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/br/app/meu-catalogo-app/id6460858710?l=en-GB&platform=iphone",
      },
    ],
  },
  {
    id: "classgame",
    title: "Desenvolvedor Full-Stack",
    company: "ClassGame",
    location: "Rio de Janeiro · Remota",
    description:
      "Desenvolvimento completo de aplicação mobile e web para gestão de salas de aula, utilizando Apollo GraphQL, NestJS, MongoDB e React Native.",
    type: "Educação · Plataforma",
    tech: ["React Native", "NestJS", "GraphQL", "MongoDB"],
    accent: "#82CFFF",
    orbitRadius: 5.6,
    orbitSpeed: 0.08,
    size: 0.36,
    tilt: -0.22,
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/search?q=classgame&c=apps",
      },
    ],
  },
  {
    id: "equester",
    title: "Desenvolvedor Front-End Mobile",
    company: "eQuester",
    location: "Rio de Janeiro · Remota",
    description:
      "Aplicativo mobile para questionários e pesquisas, com React Native, TypeScript e Git.",
    type: "Pesquisa · Mobile",
    tech: ["React Native", "TypeScript"],
    accent: "#7557FF",
    orbitRadius: 6.8,
    orbitSpeed: 0.07,
    size: 0.3,
    tilt: 0.4,
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/search?q=equester&c=apps",
      },
    ],
  },
  {
    id: "boksctrl",
    title: "Desenvolvedor Full-Stack",
    company: "3Devs",
    location: "Rio de Janeiro",
    description:
      "Construção de interfaces no aplicativo mobile e criação de landing pages para apresentação do trabalho.",
    type: "Produto · Mobile",
    tech: ["React Native", "Landing pages"],
    accent: "#FFC46B",
    orbitRadius: 3.4,
    orbitSpeed: 0.14,
    size: 0.28,
    tilt: -0.1,
    links: [],
  },
  {
    id: "netmidia",
    title: "Desenvolvedor Full-Stack",
    company: "Agência Netmidia",
    location: "Rio de Janeiro · Remota",
    description:
      "Desenvolvimento full-stack para agência digital, com NestJS, Node.js, MongoDB e React Native.",
    type: "Agência · Full-Stack",
    tech: ["NestJS", "Node.js", "MongoDB", "React Native"],
    accent: "#355CFF",
    orbitRadius: 7.8,
    orbitSpeed: 0.055,
    size: 0.34,
    tilt: 0.28,
    links: [],
  },
  {
    id: "mmodels",
    title: "Desenvolvedor Full-Stack",
    company: "MModels",
    location: "Brasil",
    description:
      "Aplicação web para plataforma de modelos, com NestJS, GraphQL, MongoDB e Next.js.",
    type: "Plataforma · Web",
    tech: ["Next.js", "NestJS", "GraphQL", "MongoDB"],
    accent: "#FF8A3D",
    orbitRadius: 8.8,
    orbitSpeed: 0.045,
    size: 0.32,
    tilt: -0.32,
    links: [],
  },
  {
    id: "biblia-sagrada",
    title: "Desenvolvedor Front-End Mobile",
    company: "3Devs",
    location: "Brasil · Remota",
    description:
      "Aplicativo mobile para leitura da Bíblia Sagrada, com React Native, TypeScript e GraphQL.",
    type: "Conteúdo · Mobile",
    tech: ["React Native", "TypeScript", "GraphQL"],
    accent: "#A7B3C7",
    orbitRadius: 9.7,
    orbitSpeed: 0.038,
    size: 0.26,
    tilt: 0.12,
    links: [],
  },
];
