import styled from "styled-components";
import Text from "../../../../common/Text";
import Image from "next/image";
import LinkedinImage from "../../../../public/Linkedin.svg";
import GitbubImage from "../../../../public/Github.svg";
import TwiiterIMage from "../../../../public/Twitter.svg";
import FacebookIMage from "../../../../public/Facebook.svg";

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

const ImageContet = styled.div`
  display: flex;
  height: 60.56px;
  width: 61.91px;
  border-radius: 50%;
  background: "#ffffff";
`;

const data = [
  {
    id: 0,
    image: GitbubImage,
  },
  { id: 1, image: FacebookIMage },
  { id: 2, image: TwiiterIMage },
  { id: 3, image: LinkedinImage },
];

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
        {data.map((item) => (
          <ImageContet key={item.id}>
            <Image src={item.image} height="100%" width="100%" />
          </ImageContet>
        ))}
      </ContentIcon>
    </Wrapper>
  );
};

export default Main;
