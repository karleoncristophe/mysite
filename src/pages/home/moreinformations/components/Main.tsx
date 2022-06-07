import styled from "styled-components";
import Link from "../../../../common/Link";

import data from "./data";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 549px) {
    flex-direction: column;
  }
`;
const ContentText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 549px) {
    justify-content: center;
  }
`;

const LinkToTitle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.68rem;
  color: #ffffff;
  @media (max-width: 549px) {
    font-size: 1.3rem;
  }
`;

const Text = styled.span`
  font-size: 1.68rem;
  color: #ffffff;
  @media (max-width: 549px) {
    display: none;
  }
`;

const Container = styled.div`
  display: none;

  @media (max-width: 549px) {
    display: flex;
    margin-bottom: 20px;
  }
`;

const ImageContet = styled.button`
  width: 60px;
  height: 60px;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 549px) {
    display: flex;
    flex-direction: row;
    width: 50px;
    height: 50px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Main = () => {
  return (
    <Wrapper>
      <Content>
        <Text style={{ width: "70%" }}>Fullstack Developer_</Text>
        <Container>
          {data.image.map((item) => (
            <ImageContet
              key={item.id}
              onClick={() => Link({ link: item.link })}
            >
              <Image src={item.image} />
            </ImageContet>
          ))}
        </Container>
        <ContentText>
          {data.text.map((item) => (
            <LinkToTitle
              onClick={() => Link({ link: item.link, target: "_top" })}
              key={item.id}
            >
              {item.text}
            </LinkToTitle>
          ))}
        </ContentText>
      </Content>
    </Wrapper>
  );
};

export default Main;
