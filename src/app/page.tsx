
'use client';

import ThreeScene from '@/components/ThreeScene';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ThreeScene />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="mb-8">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Karleon Cristophe
          </h1>
          <p className="text-3xl text-gray-300 mb-2">
            Fullstack Developer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Especialista em React, Next.js, Node.js e desenvolvimento mobile. 
            Transformando ideias em soluções digitais inovadoras.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Sobre Mim
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            Contato
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">React</div>
            <div className="text-sm text-gray-300">Frontend</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">Node.js</div>
            <div className="text-sm text-gray-300">Backend</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">Next.js</div>
            <div className="text-sm text-gray-300">Fullstack</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">Mobile</div>
            <div className="text-sm text-gray-300">React Native</div>
          </div>
        </div>
      </div>
    </div>
  );
}
