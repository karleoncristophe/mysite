import styled from "styled-components";
import Text from "../../../../common/Text";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Header = () => {
  return (
    <Wrapper>
      <Text size={3.12} weight={600} style={{ lineHeight: "55px" }}>
        Quem Sou
      </Text>
      <Text size={1.87}>Vamos lá me conhecer um pouco...</Text>
    </Wrapper>
  );
};

export default Header;
