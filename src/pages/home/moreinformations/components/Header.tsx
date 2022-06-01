import styled from "styled-components";
import Text from "../../../../common/Text";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;
const ContentText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const data = [
  { id: 0, text: "Home" },
  { id: 1, text: "Quem Sou" },
  { id: 2, text: "Habilidades" },
  { id: 3, text: "Contato" },
];

const Header = () => {
  return (
    <Wrapper>
      <Text size={1.87} weight={600}>
        Karleon C.
      </Text>
      <Content>
        <Text size={1.12} style={{ width: "70%" }}>
          Fullstack Developer_
        </Text>
        <ContentText>
          {data.map((item) => (
            <Text size={1.68} key={item.id}>
              {item.text}
            </Text>
          ))}
        </ContentText>
      </Content>
    </Wrapper>
  );
};

export default Header;
