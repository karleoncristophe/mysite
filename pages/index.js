import styled from 'styled-components';
import Header from '../common/components/Header';
import Main from '../common/components/Main';
import SEO from '../common/SEO';

import { useDarkMode } from '../context/DarkMode';

const Wrapper = styled.div`
  display: flex;
  background: ${props => (props.darkMode ? ' #fffff' : '#030412')};
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
  width: 88%;
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;

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

const Spacer = styled.div`
  height: 10vh;
  background: transparent;
  @media (max-width: 720px) {
    height: 0;
  }
`;

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <Wrapper darkMode={darkMode}>
      <Content>
        <Header />
        <Main />
        <Spacer />
      </Content>
      <SEO />
    </Wrapper>
  );
}
