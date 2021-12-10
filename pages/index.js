import styled from 'styled-components';
import Header from '../common/components/Header';
import Main from '../common/components/Main';
import SEO from '../common/SEO';

import { useDarkMode } from '../context/DarkMode';
const Wrapper = styled.div`
  display: flex;
  background: ${props => (props.darkMode ? ' #fffff' : '#030412')};
  transition: 1s;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  padding-left: 10px;
  padding-right: 10px;
  height: 100vh;

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
