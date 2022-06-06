import styled from "styled-components";
import Link from "../../../../common/Link";

import data from "./data";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;
  @media (max-width: 946px) {
    flex-direction: column;
  }
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 80%;

  @media (max-width: 946px) {
    align-items: center;
  }
`;
const ContentIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 90%;
  width: 100%;

  @media (max-width: 549px) {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
  }
`;

const ImageContet = styled.button`
  display: flex;
  padding: 0px;
  border-radius: 50px;
  height: 70px;
  width: 61.91px;
  border: none;
  background: transparent;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  overflow: hidden;

  @media (hover: hover) and (pointer: fine) {
    &&:hover {
      display: flex;
      height: 70px;
      padding: 0px;
      justify-content: space-between;
      transition: all ease-out 0.4s;
      width: 268px;
      border-radius: 50px;
      background: #ffffff;

      p {
        display: flex;
      }

      figure {
        display: flex;
        border-radius: 50%;
        overflow: hidden;
        height: 61px;
        width: 61px;
      }
      img {
        background: radial-gradient(
          #29263d 66%,

          #ffffff 1%
        );
        height: 100%;
        width: 100%;
      }
    }
  }

  @media (max-width: 1266px) {
    display: none;
  }
`;
const ImageContentPhone = styled.button`
  display: none;
  cursor: pointer;
  margin-top: 40px;

  @media (max-width: 549px) {
    display: flex;
    background: none;
    border: none;
  }
`;

const Figure = styled.figure`
  display: flex;
  margin: 0px;
  padding: 0px;
  justify-content: center;
  align-items: center;
  height: 61px;
  width: 61px;

  @media (max-width: 549px) {
    display: none;
  }
`;

const ImagePhone = styled.img`
  /* border-radius: 50%; */
  height: 45px;
  width: 45px;
`;

const Image = styled.img`
  /* border-radius: 50%; */
  height: 100%;
  width: 100%;
`;

const Name = styled.p`
  display: none;
  cursor: pointer;
  border: none;
  color: #000;
  padding-left: 20px;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  height: 100%;
`;

const Title = styled.span`
  font-size: 6.07rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 549px) {
    font-size: 4.07rem;
  }
`;
const SubTitle = styled.span`
  font-size: 2.95rem;
  font-weight: 400;
  color: #ffffff;
  @media (max-width: 549px) {
    font-size: 1.95rem;
  }
`;
const Span = styled.span`
  font-size: 2.95rem;
  font-weight: 400;
  color: #ffffff;
  @media (max-width: 549px) {
    font-size: 1.95rem;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <ContentText>
        <Span>Olá, eu sou</Span>
        <Title style={{ marginTop: "-1%" }}>Karleon</Title>
        <Title style={{ marginTop: "-3%" }}>Cristophe</Title>
        <SubTitle>Fullstack Developer_</SubTitle>
      </ContentText>
      <ContentIcon>
        {data.image.map((item) => (
          <ImageContet key={item.id} onClick={() => Link({ link: item.link })}>
            <Name>{item.name}</Name>
            <Figure>
              <Image src={item.img} />
            </Figure>
          </ImageContet>
        ))}
        {data.image.map((item) => (
          <ImageContentPhone
            key={item.id}
            onClick={() => Link({ link: item.link })}
          >
            <ImagePhone src={item.img} />
          </ImageContentPhone>
        ))}
      </ContentIcon>
    </Wrapper>
  );
};

export default Main;
