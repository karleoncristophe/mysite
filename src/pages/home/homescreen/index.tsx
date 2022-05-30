import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: linear-gradient(360deg, #171522 38.25%, #450e73 100%);
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
`;

const HomeScreen = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default HomeScreen;
