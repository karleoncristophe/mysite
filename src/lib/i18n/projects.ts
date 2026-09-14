import { projects, type Project } from "@/data/projects";

type Translate = (key: never) => string;

export function localizeProject(project: Project, t: Translate): Project {
  const translate = t as (key: string) => string;
  const prefix = `items.${project.id}`;

  return {
    ...project,
    title: translate(`${prefix}.title`),
    location: translate(`${prefix}.location`),
    description: translate(`${prefix}.description`),
    type: translate(`${prefix}.type`),
    links: project.links.map((link) => ({
      ...link,
      label: /catálogo|catalogo/i.test(link.label)
        ? translate(`${prefix}.website`)
        : link.label,
    })),
  };
}

export function localizeProjects(t: Translate): Project[] {
  return projects.map((project) => localizeProject(project, t));
}
