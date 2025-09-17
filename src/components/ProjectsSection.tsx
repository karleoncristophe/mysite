'use client';

import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projects, Project } from '@/data/projects';

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    
    const startX = e.pageX - scrollContainerRef.current.offsetLeft;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!scrollContainerRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-cyan-400 mb-4">Projetos</h2>
        <p className="text-xl text-gray-300">Minha experiência profissional e projetos desenvolvidos</p>
      </div>


      {/* Projects Grid - Horizontal Scroll */}
      <div 
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <div key={project.id} className="flex-shrink-0 w-80">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

    </div>
  );
}
