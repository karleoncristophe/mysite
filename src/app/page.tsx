import type { Metadata } from "next";
import StarsBackground from "@/components/StarsBackground";
import Navbar from "@/components/Navbar";
import AtomOverlay from "@/components/AtomOverlay";
import SkillsList from "@/components/SkillsList";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { siteConfig } from "@/config/site";
import { homeJsonLd, jsonLdScript, robotsMetadata } from "@/lib/seo/seo";

const pageTitle = `${siteConfig.name} | ${siteConfig.tagline}`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: pageTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    firstName: siteConfig.givenName,
    lastName: siteConfig.familyName,
    username: "karleoncristophe",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.shortDescription,
    creator: siteConfig.twitter,
    site: siteConfig.twitter,
  },
  robots: robotsMetadata(),
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(homeJsonLd()) }}
      />
      <ScrollProgress />
      <StarsBackground className="opacity-100" density={8000} />
      <AtomOverlay className="fixed inset-0 -z-10 pointer-events-none" />
      <Navbar />
      <main>
        <header
          id="home"
          className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4"
        >
          <div className="mb-8">
            <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
              {siteConfig.name}
            </h1>
            <p className="text-3xl text-cyan-300 mb-2 font-light">
              {siteConfig.jobTitle}
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Especialista em React, Next.js, Node.js e desenvolvimento mobile.
              Transformando ideias em soluções digitais inovadoras no vasto
              universo da tecnologia.
            </p>
          </div>
        </header>

        <ScrollAnimatedSection
          id="quemsou"
          className="relative z-10 flex items-center justify-center px-4 py-20"
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-cyan-400 mb-4">Quem Sou?</h2>
              <p className="text-xl text-gray-300">
                Vamos lá me conhecer um pouco...
              </p>
            </div>

            <article className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-cyan-400 text-2xl">→</div>
                <div className="text-cyan-400 font-mono text-lg">
                  nano <span className="text-white">about</span>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded p-6 font-mono text-gray-300 leading-relaxed">
                <p>
                  Atualmente estudando/trabalhando com Frontend, Backend e Mobile.
                  Amo aprender novas tecnologias e enfrentar novos desafios na
                  programação. Iniciei minha carreira como programador visando
                  desenvolvimento de jogos, que é algo que gosto muito, mas com o
                  decorrer do tempo me apaixonei por desenvolvimento Web e Mobile.
                  Estudo/Trabalho com ReactJS, React-Native, NextJS, NestJS e
                  NodeJS.
                </p>
              </div>
            </article>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection
          id="habilidades"
          className="relative z-10 flex items-center justify-center px-4 py-20"
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-cyan-400 mb-4">
                Habilidades
              </h2>
              <p className="text-xl text-gray-300">
                Minha experiência de trabalho
              </p>
            </div>

            <SkillsList />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection
          id="projetos"
          className="relative z-10 flex items-center justify-center px-4 py-20"
        >
          <div className="w-full max-w-7xl mx-auto">
            <ProjectsSection />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection
          id="contato"
          className="relative z-10 flex items-center justify-center px-4 py-20"
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-cyan-400 mb-4">Contato</h2>
              <p className="text-xl text-gray-300">
                Vamos conversar sobre seu projeto
              </p>
            </div>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Conversar no WhatsApp com ${siteConfig.name}`}
              className="block bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20 w-full hover:bg-cyan-400/10 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-cyan-400 text-2xl">→</div>
                <div className="text-cyan-400 font-mono text-lg">
                  call <span className="text-white">whatsapp</span>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded p-6 font-mono text-gray-300 leading-relaxed">
                <div className="mb-4">
                  <span className="text-cyan-400">$</span>
                  <span className="text-white ml-2">
                    WhatsApp: {siteConfig.phoneDisplay}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-cyan-400">$</span>
                  <span className="text-white ml-2">
                    Disponível para projetos e conversas
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-cyan-400">$</span>
                  <span className="text-white ml-2">
                    Horário: Segunda a Sexta, 9h às 18h
                  </span>
                </div>
                <div className="text-green-400">
                  <span className="text-cyan-400">$</span>
                  <span className="text-white ml-2">
                    Status: Online e pronto para conversar! 🚀
                  </span>
                </div>
              </div>
            </a>
          </div>
        </ScrollAnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
