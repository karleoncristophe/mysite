export type SkillNode = {
  name: string;
  x: number;
  y: number;
  z: number;
};

export const skills: SkillNode[] = [
  { name: "React", x: 0, y: 0.15, z: 0 },
  { name: "Next.js", x: 1.55, y: 0.72, z: 0.18 },
  { name: "TypeScript", x: -1.35, y: 0.85, z: -0.22 },
  { name: "Node.js", x: 0.35, y: -1.05, z: 0.3 },
  { name: "NestJS", x: 2.05, y: -0.55, z: -0.15 },
  { name: "React Native", x: -1.9, y: -0.35, z: 0.25 },
  { name: "MongoDB", x: 0.9, y: 1.45, z: -0.4 },
  { name: "GraphQL", x: -0.7, y: 1.55, z: 0.35 },
  { name: "JavaScript", x: -2.4, y: 0.55, z: -0.08 },
  { name: "HTML5", x: -3.05, y: -0.15, z: 0.12 },
  { name: "CSS3", x: -2.55, y: -1.1, z: -0.18 },
];

export const skillLinks: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 5],
  [1, 4],
  [2, 7],
  [2, 8],
  [3, 4],
  [5, 8],
  [6, 1],
  [6, 7],
  [8, 9],
  [9, 10],
  [5, 10],
];

export const skillNames = skills.map((skill) => skill.name);
