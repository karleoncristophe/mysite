'use client';

import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiNestjs, 
  SiGraphql, 
  SiMongodb 
} from 'react-icons/si';

interface SkillCardProps {
  name: string;
  className?: string;
}

export function SkillCard({ name, className = '' }: SkillCardProps) {
  const getTechIcon = (tech: string) => {
    switch (tech) {
      case 'HTML5':
        return <SiHtml5 className="w-16 h-16 text-orange-500" />;
      case 'CSS3':
        return <SiCss3 className="w-16 h-16 text-blue-500" />;
      case 'JavaScript':
        return <SiJavascript className="w-16 h-16 text-yellow-500" />;
      case 'ReactJS':
      case 'React Native':
        return <SiReact className="w-16 h-16 text-cyan-400" />;
      case 'TypeScript':
        return <SiTypescript className="w-16 h-16 text-blue-600" />;
      case 'NextJS':
        return <SiNextdotjs className="w-16 h-16 text-white" />;
      case 'NestJS':
        return <SiNestjs className="w-16 h-16 text-red-500" />;
      case 'GraphQL':
        return <SiGraphql className="w-16 h-16 text-pink-500" />;
      case 'MongoDB':
        return <SiMongodb className="w-16 h-16 text-green-500" />;
      default:
        return (
          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">{tech.charAt(0)}</span>
          </div>
        );
    }
  };

  return (
    <div className={`bg-black/40 backdrop-blur-sm rounded-lg p-6 text-center border border-cyan-400/20 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 ${className}`}>
      <div className="mb-4 flex justify-center items-center h-20">
        {getTechIcon(name)}
      </div>
      <div className="text-lg font-bold text-cyan-400">{name}</div>
    </div>
  );
}
