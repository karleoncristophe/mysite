export interface Project {
  id: string;
  title: string;
  company: string;
  location: string;
  description?: string;
  skills: string[];
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
    skills: ['JavaScript', 'React Native', 'GraphQL', 'React'],
    links: [
      {
        label: 'Meu Catálogo - Apps on Google Play',
        url: '#'
      },
      {
        label: 'Meu site',
        url: '#'
      }
    ],
  },
  {
    id: 'personal-site',
    title: 'Meu site',
    company: 'Site próprio',
    location: 'Brazil · Presencial',
    skills: ['CSS', 'Git', 'Front-End Development', 'HTML5', 'Next.js', 'CSS Flexbox', 'TypeScript', 'styled-components'],
    links: [
      {
        label: 'Meu site',
        url: '#'
      }
    ],
  },
  {
    id: 'classgame',
    title: 'ClassGame',
    company: 'ClassGame',
    location: 'Rio de Janeiro, Brazil · Remota',
    skills: ['Apollo GraphQL', 'Back-End Web Development', 'Desenvolvimento web', 'TypeScript', 'Software Development', 'Responsive Web Design', 'React.js', 'React Native', 'React', 'Next.js', 'NestJS', 'MongoDB'],
    links: [
      {
        label: 'ClassGame - Apps on Google Play',
        url: '#'
      }
    ],
  },
  {
    id: 'equester',
    title: 'eQuester',
    company: 'eQuester',
    location: 'Rio de Janeiro, Rio de Janeiro, Brazil · Remota',
    skills: ['React Native', 'React', 'Software Development', 'TypeScript', 'Git', 'Front-End Development'],
    links: [
      {
        label: 'eQuester - Apps on Google Play',
        url: '#'
      }
    ],
  },
  {
    id: 'boksctrl',
    title: 'BoksCtrl',
    company: '3Devs',
    location: 'Rio de Janeiro, Brasil',
    description: 'Construção de interfaces no aplicativo mobile e criação de lading pages para apresentação do trabalho.',
    skills: ['React Native', 'Next.js', 'CSS Flexbox', 'React.js', 'styled-components'],
    links: [],
  },
  {
    id: 'netmidia',
    title: 'Desenvolvedor full stack',
    company: 'Agência Netmidia',
    location: 'Rio de Janeiro · Remota',
    skills: ['NestJS', 'Node.js', 'Back-End Web Development', 'Desenvolvimento web', 'JavaScript', 'CSS', 'GraphQL', 'Responsive Web Design', 'React Native', 'Git', 'Front-End Development', 'MongoDB', 'HTML5', 'Firebase', 'Next.js', 'Express.js', 'CSS Flexbox', 'TypeScript', 'Apollo GraphQL', 'React.js', 'styled-components', 'HTML'],
    links: [],
  },
  {
    id: 'mmodels',
    title: 'MModels',
    company: 'MModels',
    location: 'Brazil',
    skills: ['NestJS', 'Back-End Web Development', 'CSS', 'GraphQL', 'React Native', 'MongoDB', 'Next.js', 'CSS Flexbox', 'TypeScript', 'Apollo GraphQL', 'React.js', 'styled-components'],
    links: [],
  },
  {
    id: 'biblia-sagrada',
    title: 'Bíblia Sagrada',
    company: '3Devs',
    location: 'Brazil · Remota',
    skills: ['GraphQL', 'React Native', 'Git', 'Front-End Development', 'TypeScript', 'styled-components'],
    links: [],
  }
];
