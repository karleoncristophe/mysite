import Background from '@/components/Background';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      
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
            Transformando ideias em soluções digitais inovadoras no vasto universo da tecnologia.
          </p>
        </div>
      </div>
    </div>
  );
}
