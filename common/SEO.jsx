import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const SEO = () => (
  <>
    <Head>
      <meta name="theme-color" content="#000" />
      <meta lang="pt-br" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Karleon Cristophe" />
      <meta property="og:url" content="https://www.karleoncristophe.com.br/" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NextSeo
      title="Karleon Cristophe"
      description="Programador web/mobile freelancer, criação de sites, aplicativos móveis, landing pages, front e backend."
      canonical="https://www.karleoncristophe.com.br/"
      openGraph={{
        url: 'https://www.karleoncristophe.com.br/',
        title: 'Karleon Cristophe',

        description:
          'Programador web/mobile freelancer, criação de sites, aplicativos móveis, landing pages, front e backend.',
        images: [
          {
            url: 'https://www.karleoncristophe.com.br/programming.svg',
            width: 900,
            height: 600,
            alt: 'karleoncristophe',
          },
          {
            url: 'https://www.karleoncristophe.com.br/programming.svg',
            width: 900,
            height: 800,
            alt: 'karleoncristophe',
          },
          { url: 'https://www.karleoncristophe.com.br/programming.svg' },
          { url: 'https://www.karleoncristophe.com.br/programming.svg' },
        ],
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@karleoncris',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  </>
);

export default SEO;
