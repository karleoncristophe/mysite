interface Props {
  link: string;
  target?: "_blank" | "_top";
}

const Link = ({ link, target }: Props) => {
  window.open(link, target ? target : "_blank");
};

export default Link;
