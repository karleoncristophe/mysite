import styled from "styled-components";
import Text from "../../../../common/Text";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
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
      <Text size={1.87}>Karleon C.</Text>
      <ContentText>
        {data.map((item) => (
          <Text size={1.87} key={item.id}>
            {item.text}
          </Text>
        ))}
      </ContentText>
    </Wrapper>
  );
};

export default Header;
