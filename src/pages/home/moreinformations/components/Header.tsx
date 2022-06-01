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
      <Text size={1.87} weight={600} style={{ lineHeight: "22px" }}>
        Karleon C.
      </Text>
    </Wrapper>
  );
};

export default Header;
