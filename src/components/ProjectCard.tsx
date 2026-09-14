import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {


  return (
    <article className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:bg-black/60 h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-cyan-400 text-lg mb-2">{project.company}</p>
      </div>

      {/* Location */}
      <div className="mb-4 text-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">→</span>
          <span className="font-mono text-sm">{project.location}</span>
        </div>
      </div>

      {/* Description */}
      {project.description && (
        <div className="mb-4">
          <div className="bg-gray-900/50 rounded p-4">
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
        </div>
      )}


      {/* Links */}
      {project.links.length > 0 && (
        <div className="border-t border-gray-700/50 pt-4 mt-auto">
          <div className="flex items-start gap-4 mb-3">
            <div className="text-cyan-400 text-lg">→</div>
            <div className="text-cyan-400 font-mono text-sm">links</div>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-md text-sm border border-cyan-400/30 hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-200 flex items-center gap-2"
              >
                <span>{link.label}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
