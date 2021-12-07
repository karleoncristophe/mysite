import { useState } from 'react';
import styled from 'styled-components';
import Header from '../common/components/Header';
import Main from '../common/components/Main';
import SEO from '../common/SEO';

const Wrapper = styled.div`
  display: flex;
  background: ${props => (props.darkMode ? ' #fffff' : '#1c1c1c')};
  transition: 1s;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(false);
  };

  const handleLightMode = () => {
    setDarkMode(true);
  };

  return (
    <Wrapper darkMode={darkMode}>
      <Header
        arkMode={darkMode}
        handleDarkMode={handleDarkMode}
        handleLightMode={handleLightMode}
      />
      <Main />
      <SEO />
    </Wrapper>
  );
}
