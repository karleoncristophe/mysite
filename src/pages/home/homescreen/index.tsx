import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(360deg, #171522 38.25%, #450e73 100%);
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 2%;

  @media (max-width: 549px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;

const Center = styled.div`
  display: flex;
  margin-top: 5%;
  flex: 4;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ArrowContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;
const Arrow = styled.img`
  height: 41px;
  width: 41px;

  aspect-ratio: attr(width);
  transition: 0.5s;
  transform: translateY(0px);
  animation: float 5s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const HomeScreen = () => {
  return (
    <Wrapper id="home">
      <Header />
      <Center>
        <Main />
        <Footer />
      </Center>
      <ArrowContent>
        <Arrow src="/Arrow.png" />
      </ArrowContent>
    </Wrapper>
  );
};

export default HomeScreen;
