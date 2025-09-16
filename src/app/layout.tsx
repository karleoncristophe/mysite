import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Karleon Cristophe - Fullstack Developer",
    template: "%s | Karleon Cristophe"
  },
  description: "Programador web/mobile freelancer, criação de sites, aplicativos móveis, landing pages, front e backend. Especialista em React, Next.js, Node.js e desenvolvimento mobile.",
  keywords: [
    "Karleon Cristophe",
    "desenvolvedor fullstack",
    "programador web",
    "desenvolvimento mobile",
    "React",
    "Next.js",
    "Node.js",
    "freelancer",
    "criação de sites",
    "aplicativos móveis",
    "landing pages",
    "frontend",
    "backend",
    "desenvolvimento web",
    "programação",
    "tecnologia"
  ],
  authors: [{ name: "Karleon Cristophe" }],
  creator: "Karleon Cristophe",
  publisher: "Karleon Cristophe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://karleoncristophe.com.br"),
  alternates: {
    canonical: "https://karleoncristophe.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://karleoncristophe.com.br",
    title: "Karleon Cristophe - Fullstack Developer",
    description: "Programador web/mobile freelancer, criação de sites, aplicativos móveis, landing pages, front e backend.",
    siteName: "Karleon Cristophe",
    images: [
      {
        url: "https://i.pinimg.com/736x/0e/e2/8b/0ee28b9865481ff02ee85fa915c3b0ef.jpg",
        width: 1200,
        height: 630,
        alt: "Karleon Cristophe - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karleon Cristophe - Fullstack Developer",
    description: "Programador web/mobile freelancer, criação de sites, aplicativos móveis, landing pages, front e backend.",
    creator: "@karleoncris",
    site: "@karleoncris",
    images: ["https://i.pinimg.com/736x/0e/e2/8b/0ee28b9865481ff02ee85fa915c3b0ef.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Portfolio, Developer, Fullstack",
  other: {
    "application-name": "Karleon Cristophe Portfolio",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Karleon Cristophe",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Karleon Cristophe",
    "jobTitle": "Fullstack Developer",
    "description": "Programador web/mobile freelancer, especialista em React, Next.js, Node.js e desenvolvimento mobile",
    "url": "https://karleoncristophe.com.br",
    "image": "https://i.pinimg.com/736x/0e/e2/8b/0ee28b9865481ff02ee85fa915c3b0ef.jpg",
    "sameAs": [
      "https://github.com/karleoncristophe",
      "https://linkedin.com/in/karleoncristophe",
      "https://twitter.com/karleoncris",
      "https://www.instagram.com/karleoncristophe/"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "React Native",
      "Web Development",
      "Mobile Development",
      "Frontend Development",
      "Backend Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Fullstack Developer",
      "description": "Desenvolvedor especializado em criação de sites, aplicativos móveis e landing pages"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    }
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
