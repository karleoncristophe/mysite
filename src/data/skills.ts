export const skills = [
  { name: "HTML5" },
  { name: "React Native" },
  { name: "CSS3" },
  { name: "React" },
  { name: "JavaScript" },
  { name: "GraphQL" },
  { name: "NestJS" },
  { name: "NextJS" },
  { name: "TypeScript" },
  { name: "MongoDB" },
] as const;

export const skillNames = skills.map((skill) => skill.name);
