import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

const Wrapper = styled.div`
  display: flex;
  height: 263px;
  align-items: center;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  background: #450e73;
`;

const MoreInformations = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
};

export default MoreInformations;
