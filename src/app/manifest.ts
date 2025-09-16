import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Karleon Cristophe - Fullstack Developer',
    short_name: 'Karleon Cristophe',
    description: 'Portfolio profissional de Karleon Cristophe - Desenvolvedor Fullstack especializado em React, Next.js, Node.js e desenvolvimento mobile',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['technology', 'developer', 'portfolio'],
    lang: 'pt-BR',
    orientation: 'portrait-primary',
  }
}
