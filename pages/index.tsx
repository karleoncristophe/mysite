import styled from "styled-components";
import Header from "../common/components/Header";
import Main from "../common/components/Main";
import SEO from "../common/SEO";

import { useDarkMode } from "../context/DarkMode";

const Wrapper = styled.div<any>`
  display: flex;
  background: ${(props) => (props.darkMode ? " #fffff" : "#030412")};
  transition: 0.5s;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 1585px) {
    width: 85%;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: 1200px) {
    width: 96%;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: 908px) {
    width: 95%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <Wrapper darkMode={darkMode}>
      <Content>
        <Header />
        <Main />
      </Content>
      <SEO />
    </Wrapper>
  );
}
