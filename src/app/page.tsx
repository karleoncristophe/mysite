
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
      </div>
    </div>
  );
}
