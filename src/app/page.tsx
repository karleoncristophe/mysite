import StarsBackground from "@/components/StarsBackground";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarsBackground className="opacity-100" density={8000} />
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
        <div className="max-w-4xl mx-auto">
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
    </div>
  );
}
