import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Space from "../../../common/Space";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 263px;
  justify-content: center;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  background: #450e73;
`;

const MoreInformations = () => {
  return (
    <Wrapper id="">
      <Header />
      <Main />
      <Space height={25} />
      <Footer />
    </Wrapper>
  );
};

export default MoreInformations;
