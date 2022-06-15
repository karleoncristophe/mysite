export interface Idata {
  id?: number;
  image?: string;
  text?: string;
  TimeExperience?: string;
  width?: number;
}

const data: Idata[] = [
  {
    id: 0,
    image: "/HTML.svg",
    text: "HTML5",
    TimeExperience: "2 anos",
    width: 70,
  },
  {
    id: 1,
    image: "/React.svg",
    text: "React Native",
    TimeExperience: "1 ano",
    width: 30,
  },
  {
    id: 2,
    image: "/Css.svg",
    text: "CSS3",
    TimeExperience: "2 anos",
    width: 70,
  },
  {
    id: 3,
    image: "/React.svg",
    text: "React",
    TimeExperience: "1 ano",
    width: 30,
  },
  {
    id: 4,
    image: "/JavaScript.svg",
    text: "JavaScript",
    TimeExperience: "2 anos",
    width: 70,
  },
  {
    id: 5,
    image: "/GraphQl.svg",
    text: "GraphQl",
    TimeExperience: "1 ano",
    width: 30,
  },
  {
    id: 6,
    image: "/TypeScript.svg",
    text: "TypeScript",
    TimeExperience: "1 ano",
    width: 40,
  },

  {
    id: 7,
    image: "/MongoDB.svg",
    text: "MongoDB",
    TimeExperience: "1 ano",
    width: 30,
  },
];

export default data;
