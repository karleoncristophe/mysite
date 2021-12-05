import styled from 'styled-components';
import Header from '../common/components/Header';
import SEO from '../common/SEO';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <SEO />
    </Wrapper>
  );
}
