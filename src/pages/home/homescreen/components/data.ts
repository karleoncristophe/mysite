type Text = {
  id: number;
  text: string;
  link: string;
};

type Link = {
  linkToWpp: string;
};

type Image = {
  id: number;
  name: string;
  img: string;
  color: string;
  link: string;
};

type ImageMobile = {
  id: number;
  name: string;
  img: string;
  link: string;
};

export interface Idata {
  text?: Text[];
  link?: Link;
  image?: Image[];
  imageMobile?: ImageMobile[];
}

const data: Idata = {
  text: [
    { id: 0, text: "Home", link: "#home" },
    { id: 1, text: "Quem Sou", link: "#quemSou" },
    { id: 2, text: "Habilidades", link: "#habilidades" },
    { id: 3, text: "Contato", link: "#contato" },
  ],

  link: {
    linkToWpp:
      "https://api.whatsapp.com/send?phone=5521981454891&text=Ol%C3%A1!%20Preciso%20de%20uma%20ajudinha%20sua%20em%20um%20projeto!%20",
  },

  image: [
    {
      id: 0,
      name: "Github",
      img: "/Github.svg",
      color: "#22272e",
      link: "https://github.com/karleoncristophe",
    },
    {
      id: 1,
      name: "Facebook",
      img: "/Facebook.svg",
      color: " #3b5998",
      link: "https://www.facebook.com/karleoncris/",
    },
    {
      id: 2,
      name: "Twitter",
      img: "/Twitter.svg",
      color: "#00acee",
      link: "https://twitter.com/karleoncris",
    },
    {
      id: 3,
      name: "Linkedin",
      img: "/Linkedin.svg",
      color: "#0e76a8",
      link: "https://www.linkedin.com/in/karleon-cristophe-07657b221/",
    },
    {
      id: 4,
      name: "Instagram",
      img: "/Instagram2.svg",
      color: "#C13584",
      link: "https://www.instagram.com/karleoncristophe/",
    },
  ],

  imageMobile: [
    {
      id: 0,
      name: "Github",
      img: "/Github.svg",
      link: "https://github.com/karleoncristophe",
    },
    {
      id: 1,
      name: "Linkedin",
      img: "/Linkedin.svg",
      link: "https://www.linkedin.com/in/karleon-cristophe-07657b221/",
    },
    {
      id: 2,
      name: "Instagram",
      img: "/Instagram2.svg",
      link: "https://www.instagram.com/karleoncristophe/",
    },
  ],
};

export default data;
