import styled from "styled-components";
import Link from "../../../../common/Link";
import Text from "../../../../common/Text";
import data from "./data";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  /* @media (max-width: 549px) {
    flex-direction: column;
  }   */
  @media (max-width: 1011px) {
    flex-direction: column;
  }
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

  @media (max-width: 1011px) {
    display: flex;
    flex-direction: row;
    width: 30px;
    height: 30px;
  }

  /* @media (max-width: 549px) {
    display: flex;
    flex-direction: row;
    width: 30px;
    height: 30px;
  } */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TextContent = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;

  /* @media (max-width: 549px) {
    display: none;
  }  */

  @media (max-width: 1011px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 1011px) {
    display: none;
  }
  /* @media (max-width: 549px) {
    display: none;
  } */
`;
const TextContentMobile = styled.div`
  display: none;

  @media (max-width: 1011px) {
    display: flex;
    /* margin-top: 10px; */
  }
  /* @media (max-width: 549px) {
    display: flex;
    margin-top: 0px;
  } */
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        {data.image.map((item) => (
          <ImageContet key={item.id} onClick={() => Link({ link: item.link })}>
            <Image src={item.image} />
          </ImageContet>
        ))}
      </Container>
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
      <TextContentMobile>
        <Text align="center">
          Copyright 2022 © karleoncristophe. todos os direitos reservados
        </Text>
      </TextContentMobile>
    </Wrapper>
  );
};

export default Footer;
