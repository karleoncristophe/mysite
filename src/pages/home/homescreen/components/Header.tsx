import styled from "styled-components";
import Link from "../../../../common/Link";
import Text from "../../../../common/Text";
import data from "./data";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const LinkToTitle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Wrapper>
      <Text size={1.87}>Karleon C.</Text>
      <ContentText>
        {data.text.map((item) => (
          <LinkToTitle
            key={item.id}
            onClick={() => Link({ link: item.link, target: "_top" })}
          >
            <Text size={1.87}>{item.text}</Text>
          </LinkToTitle>
        ))}
      </ContentText>
    </Wrapper>
  );
};

export default Header;
