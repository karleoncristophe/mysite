export interface Project {
  id: string;
  title: string;
  company: string;
  location: string;
  description?: string;
  links: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'gurgel-tech',
    title: 'Desenvolvedor Full-Stack',
    company: 'Gurgel Tech',
    location: 'Rio de Janeiro, Rio de Janeiro, Brazil · Remota',
    description: 'Desenvolvimento de aplicações full-stack utilizando JavaScript, React Native e GraphQL para criação de soluções mobile e web integradas.',
    links: [
      {
        label: 'Meu Catálogo - Website',
        url: 'https://meucatalogo.app/'
      },
      {
        label: 'Meu Catálogo - Apps on Google Play',
        url: 'https://play.google.com/store/apps/details?id=app.meucatalogo'
      },
      {
        label: 'Meu Catálogo - Apps on Apple Store',
        url: 'https://apps.apple.com/br/app/meu-catalogo-app/id6460858710?l=en-GB&platform=iphone'
      },

    ],
  },
  {
    id: 'classgame',
    title: 'Desenvolvedor Full-Stack',
    company: 'ClassGame',
    location: 'Rio de Janeiro, Brazil · Remota',
    description: 'Desenvolvimento completo de aplicação mobile e web para gestão de salas de aula, utilizando Apollo GraphQL, NestJS, MongoDB e React Native para criar uma solução completa de gerenciamento educacional.',
    links: [
      {
        label: 'ClassGame - Apps on Google Play',
        url: 'https://play.google.com/store/search?q=classgame&c=apps'
      }
    ],
  },
  {
    id: 'equester',
    title: 'Desenvolvedor Front-End Mobile',
    company: 'eQuester',
    location: 'Rio de Janeiro, Rio de Janeiro, Brazil · Remota',
    description: 'Desenvolvimento de aplicativo mobile para sistema de questionários e pesquisas, utilizando React Native, TypeScript e Git para criar uma plataforma de coleta de dados eficiente.',
    links: [
      {
        label: 'eQuester - Apps on Google Play',
        url: 'https://play.google.com/store/search?q=equester&c=apps'
      }
    ],
  },
  {
    id: 'boksctrl',
    title: 'Desenvolvedor Full-Stack',
    company: '3Devs',
    location: 'Rio de Janeiro, Brasil',
    description: 'Construção de interfaces no aplicativo mobile e criação de lading pages para apresentação do trabalho.',
    links: [],
  },
  {
    id: 'netmidia',
    title: 'Desenvolvedor Full-Stack',
    company: 'Agência Netmidia',
    location: 'Rio de Janeiro · Remota',
    description: 'Desenvolvimento full-stack para agência digital, trabalhando com NestJS, Node.js, MongoDB e React Native para criação de soluções web e mobile personalizadas para clientes diversos.',
    links: [],
  },
  {
    id: 'mmodels',
    title: 'Desenvolvedor Full-Stack',
    company: 'MModels',
    location: 'Brazil',
    description: 'Desenvolvimento de aplicação web para plataforma de modelos, utilizando NestJS, GraphQL, MongoDB e Next.js para criar um sistema de gestão e exibição de conteúdo visual.',
    links: [],
  },
  {
    id: 'biblia-sagrada',
    title: 'Desenvolvedor Front-End Mobile',
    company: '3Devs',
    location: 'Brazil · Remota',
    description: 'Desenvolvimento de aplicativo mobile para leitura da Bíblia Sagrada, utilizando React Native, TypeScript e GraphQL para criar uma experiência de leitura digital moderna e intuitiva.',
    links: [],
  }
];
