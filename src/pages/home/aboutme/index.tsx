import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  background: #171522;
`;

const AboutMe = () => {
  return (
    <Wrapper id="quemSou">
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default AboutMe;
