import styled from "styled-components";
import Link from "../../../../common/Link";
import Text from "../../../../common/Text";
import data from "./data";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1600px) {
    width: 100%;
    justify-content: none;
    flex-direction: column;
  }
`;

const ContentText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 1600px) {
    justify-content: space-between;
    justify-content: center;
    width: 100%;
    margin-top: 5%;
    text-align: center;
    flex-wrap: wrap;
  }
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
