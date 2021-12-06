import { useState } from 'react';
import styled from 'styled-components';
import Header from '../common/components/Header';
import SEO from '../common/SEO';

const Wrapper = styled.div`
  display: flex;
  background: ${props => (props.darkMode ? ' #1c1c1c' : ' #fffff')};
  transition: 1s;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(true);
  };

  const handleLightMode = () => {
    setDarkMode(false);
  };

  return (
    <Wrapper darkMode={darkMode}>
      <Header
        arkMode={darkMode}
        handleDarkMode={handleDarkMode}
        handleLightMode={handleLightMode}
      />
      <SEO />
    </Wrapper>
  );
}
