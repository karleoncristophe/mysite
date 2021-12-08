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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85%;
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
