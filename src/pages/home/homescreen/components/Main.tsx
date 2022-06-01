import styled from "styled-components";
import Link from "../../../../common/Link";
import Text from "../../../../common/Text";
import data from "./data";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80%;
`;
const ContentIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`;

const ImageContet = styled.button`
  display: flex;
  height: 60.56px;
  width: 61.91px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transform: rotate(360deg);
    transition: 0.8s;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Main = () => {
  return (
    <Wrapper>
      <ContentText>
        <Text size={2.95}>Olá, eu sou</Text>
        <Text size={6.07} weight={700} style={{ marginTop: "-1%" }}>
          Karleon
        </Text>
        <Text size={6.07} weight={700} style={{ marginTop: "-3%" }}>
          Cristophe
        </Text>
        <Text size={2.95}>Fullstack Developer_</Text>
      </ContentText>
      <ContentIcon>
        {data.image.map((item) => (
          <ImageContet key={item.id} onClick={() => Link({ link: item.link })}>
            <Image src={item.image} />
          </ImageContet>
        ))}
      </ContentIcon>
    </Wrapper>
  );
};

export default Main;
