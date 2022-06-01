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
`;

const Center = styled.div`
  display: flex;
  margin-top: 5%;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background: red; */
`;

const HomeScreen = () => {
  return (
    <Wrapper id="home">
      <Header />
      <Center>
        <Main />
        <Footer />
      </Center>
    </Wrapper>
  );
};

export default HomeScreen;
