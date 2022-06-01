import styled from "styled-components";
import Link from "../../../../common/Link";
import Text from "../../../../common/Text";
import data from "./data";

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

const LinkToTitle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Main = () => {
  return (
    <Wrapper>
      <Content>
        <Text size={1.12} style={{ width: "70%" }}>
          Fullstack Developer_
        </Text>
        <ContentText>
          {data.text.map((item) => (
            <LinkToTitle
              onClick={() => Link({ link: item.link, target: "_top" })}
              key={item.id}
            >
              <Text size={1.68}>{item.text}</Text>
            </LinkToTitle>
          ))}
        </ContentText>
      </Content>
    </Wrapper>
  );
};

export default Main;
