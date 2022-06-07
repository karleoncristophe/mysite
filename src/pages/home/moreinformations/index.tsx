import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Space from "../../../common/Space";

const Wrapper = styled.div`
  display: flex;
  height: 270px;
  justify-content: center;
  width: 100%;
  background: #450e73;
`;

const Container = styled.div`
  display: flex;
  max-width: 1240px;
  padding: 40px;
  flex-direction: column;
  height: 270px;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  @media (max-width: 549px) {
    height: 280px;
    padding: 10px;
  }
`;

const MoreInformations = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main />
        <Space height={25} />
        <Footer />
      </Container>
    </Wrapper>
  );
};

export default MoreInformations;
