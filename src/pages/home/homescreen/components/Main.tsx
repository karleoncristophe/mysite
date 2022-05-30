import styled from "styled-components";
import Text from "../../../../common/Text";

const Wrapper = styled.div`
  flex: 1;
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
  justify-content: space-evenly;
  height: 80%;
`;

const Image = styled.div`
  display: flex;
  height: 60.56px;
  width: 61.91px;
  border-radius: 50%;
  background: blue;
`;

const Main = () => {
  return (
    <Wrapper>
      <ContentText>
        <Text size={2.82}>Olá, eu sou</Text>
        <Text size={5.93} weight={700}>
          Karleon
        </Text>
        <Text size={5.93} weight={700}>
          Cristophe
        </Text>
        <Text size={2.82}>Fullstack Developer_</Text>
      </ContentText>
      <ContentIcon>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
      </ContentIcon>
    </Wrapper>
  );
};

export default Main;
