import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  /* background: url("https://r4.wallpaperflare.com/wallpaper/36/14/561/minimalism-minimalist-mountains-landscape-wallpaper-b01465c8e0bcc2edba911fead217b2c2.jpg") */
  background: linear-gradient(360deg, #171522 38.25%, #450e73 100%);
  background-size: 100%;
  background-attachment: fixed;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1540px;
  padding: 40px;
  @media (max-width: 549px) {
    padding: 20px;
  }
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HomeScreen = () => {
  return (
    <Wrapper>
      <Container id="home">
        <Header />
        <Center>
          <Main />
          <Footer />
        </Center>
      </Container>
    </Wrapper>
  );
};

export default HomeScreen;
