import React from "react";
import styled from "styled-components";
import data from "./data";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 263px;
  width: 100%;
  background: #232035;
`;

const ContainerAll = styled.div`
  display: flex;
  height: 263px;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  padding: 40px;

  @media (max-width: 549px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`;

const WppAndEmailContent = styled.div`
  display: flex;
  width: 100%;
  padding: 2%;
`;

const Image = styled.img`
  margin-right: 3%;
  margin-top: 1.4%;
  width: 45.98px;
  height: 46.2px;

  @media (max-width: 549px) {
    display: none;
  }
`;

const ImageForMobile = styled.img`
  display: none;

  @media (max-width: 549px) {
    display: flex;
    margin-right: 10px;
    margin-top: 7px;
    width: 32.98px;
    height: 32.2px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 549px) {
    display: none;
  }
`;

const Title = styled.span`
  font-size: 2.22rem;
  font-weight: 600;

  @media (max-width: 549px) {
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.span`
  font-size: 1.96rem;
  font-weight: 500;

  @media (max-width: 549px) {
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;

const TextContentPhone = styled.div`
  display: none;

  @media (max-width: 549px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  display: none;

  @media (max-width: 549px) {
    display: flex;
  }
`;

const ContactMe = () => {
  return (
    <Wrapper id="contato">
      <ContainerAll>
        {data.map((item) => (
          <WppAndEmailContent key={item.id}>
            <Image src={item.image} alt={item.title} />
            <TextContent>
              <Title>{item.title}</Title>
              <SubTitle>{item.subtitle}</SubTitle>
            </TextContent>
            <TextContentPhone>
              <Container>
                <ImageForMobile src={item.image} alt={item.title} />
                <Title>{item.title}</Title>
              </Container>
              <SubTitle>{item.subtitle}</SubTitle>
            </TextContentPhone>
          </WppAndEmailContent>
        ))}
      </ContainerAll>
    </Wrapper>
  );
};

export default ContactMe;
