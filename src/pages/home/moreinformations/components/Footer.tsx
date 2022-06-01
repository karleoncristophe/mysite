import styled from "styled-components";
import Link from "../../../../common/Link";
import Text from "../../../../common/Text";
import data from "./data";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ImageContet = styled.button`
  width: 60px;
  height: 60px;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &&:hover {
    transform: scale(1.2);
    transform: rotate(360deg);
    transition: 0.8s;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TextContent = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <Wrapper>
      {data.image.map((item) => (
        <ImageContet key={item.id} onClick={() => Link({ link: item.link })}>
          <Image src={item.image} />
        </ImageContet>
      ))}
      <TextContent>
        <Text size={1.25} align="right">
          Copyright 2022 ©{" "}
          <Text weight={600} size={1.25}>
            karleoncristophe.
          </Text>
        </Text>
        <Text align="right" size={1.25}>
          todos os direitos reservados
        </Text>
      </TextContent>
    </Wrapper>
  );
};

export default Footer;
