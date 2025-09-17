'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects, Project } from '@/data/projects';

export default function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-cyan-400 mb-4">Projetos</h2>
        <p className="text-xl text-gray-300">Minha experiência profissional e projetos desenvolvidos</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por projeto, empresa ou tecnologia..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-cyan-400/20 text-white placeholder-gray-400 focus:border-cyan-400/50 focus:outline-none transition-colors duration-200"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              <span className="text-cyan-400">→</span> Nenhum projeto encontrado
            </div>
            <p className="text-gray-500">
              Tente ajustar os filtros ou termo de busca
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
