import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #171522;
`;

const Container = styled.div`
  max-width: 1540px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
`;

const AboutMe = () => {
  return (
    <Wrapper id="quemSou">
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </Wrapper>
  );
};

export default AboutMe;
