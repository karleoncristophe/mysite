'use client';

import { SkillCard } from './SkillCard';

const skills = [
  { name: 'HTML5' },
  { name: 'React Native' },
  { name: 'CSS3' },
  { name: 'ReactJS' },
  { name: 'JavaScript' },
  { name: 'GraphQL' },
  { name: 'NestJS' },
  { name: 'NextJS' },
  { name: 'TypeScript' },
  { name: 'MongoDB' },
];

export default function SkillsList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full">
      {skills.map((skill) => (
        <SkillCard key={skill.name} name={skill.name} />
      ))}
    </div>
  );
}
