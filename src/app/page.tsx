import StarsBackground from "@/components/StarsBackground";
import Navbar from "@/components/Navbar";
import AtomOverlay from "@/components/AtomOverlay";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarsBackground className="opacity-100" density={8000} />
      <AtomOverlay className="fixed inset-0 -z-10 pointer-events-none"  />
      <Navbar />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="mb-8">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
            Karleon Cristophe
          </h1>
          <p className="text-3xl text-cyan-300 mb-2 font-light">
            Fullstack Developer
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Especialista em React, Next.js, Node.js e desenvolvimento mobile.
            Transformando ideias em soluções digitais inovadoras no vasto
            universo da tecnologia.
          </p>
        </div>
      </div>

      {/* Quem Sou Section */}
      <section id="quemsou" className="relative z-10 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-cyan-400 mb-4">Quem Sou?</h2>
            <p className="text-xl text-gray-300">Vamos lá me conhecer um pouco...</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-cyan-400 text-2xl">→</div>
              <div className="text-cyan-400 font-mono text-lg">nano <span className="text-white">about</span></div>
            </div>
            
            <div className="bg-gray-900/50 rounded p-6 font-mono text-gray-300 leading-relaxed">
              <p>
                Atualmente estudando/trabalhando com Frontend, Backend e Mobile. Amo
                aprender novas tecnologias e enfrentar novos desafios na programação.
                Iniciei minha carreira como programador visando desenvolvimento de
                jogos, que é algo que gosto muito, mas com o decorrer do tempo me
                apaixonei por desenvolvimento Web e Mobile. Estudo/Trabalho com
                ReactJS, React-Native, NextJS, NestJS e NodeJS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="relative z-10 flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-cyan-400 mb-4">Habilidades</h2>
            <p className="text-xl text-gray-300">Minha experiência de trabalho</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'HTML5', 'React Native', 'CSS3', 'ReactJS', 'JavaScript',
              'GraphQL', 'NestJS', 'NextJS', 'TypeScript', 'MongoDB'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-black/40 backdrop-blur-sm rounded-lg p-6 text-center border border-cyan-400/20 hover:bg-cyan-400/10 transition-colors"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-2">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="relative z-10 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-cyan-400 mb-4">Contato</h2>
            <p className="text-xl text-gray-300">Vamos conversar sobre seu projeto</p>
          </div>
          
          <a
            href="https://wa.me/5521997058459"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20 w-full hover:bg-cyan-400/10 transition-colors duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="text-cyan-400 text-2xl">→</div>
              <div className="text-cyan-400 font-mono text-lg">call <span className="text-white">whatsapp</span></div>
            </div>
            
            <div className="bg-gray-900/50 rounded p-6 font-mono text-gray-300 leading-relaxed">
              <div className="mb-4">
                <span className="text-cyan-400">$</span> 
                <span className="text-white ml-2">WhatsApp: (21) 99705-8459</span>
              </div>
              <div className="mb-4">
                <span className="text-cyan-400">$</span> 
                <span className="text-white ml-2">Disponível para projetos e conversas</span>
              </div>
              <div className="mb-4">
                <span className="text-cyan-400">$</span> 
                <span className="text-white ml-2">Horário: Segunda a Sexta, 9h às 18h</span>
              </div>
              <div className="text-green-400">
                <span className="text-cyan-400">$</span> 
                <span className="text-white ml-2">Status: Online e pronto para conversar! 🚀</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-sm border-t border-cyan-400/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Brand Section */}
            <div className="flex items-center gap-4">
              <div className="w-px h-8 bg-white"></div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Karleon C.</h3>
                <p className="text-lg text-white">Fullstack Developer_</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#home" className="text-white hover:text-cyan-400 transition-colors">Home</a>
              <a href="#quemsou" className="text-white hover:text-cyan-400 transition-colors">Quem Sou</a>
              <a href="#habilidades" className="text-white hover:text-cyan-400 transition-colors">Habilidades</a>
              <a href="#contato" className="text-white hover:text-cyan-400 transition-colors">Contato</a>
            </div>

            {/* Social Links and Copyright */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              {/* Social Icons */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/karleoncristophe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/karleoncris" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/karleon-cristophe-07657b221/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/karleoncristophe/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.645-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              
              {/* Copyright */}
              <div className="text-center lg:text-right">
                <p className="text-white text-sm">
                  Copyright 2025 © karleoncristophe.
                </p>
                <p className="text-white text-sm">
                  todos os direitos reservados
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
