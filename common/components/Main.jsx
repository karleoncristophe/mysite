import styled from 'styled-components';
import Informations from './Informations';

const Wrapper = styled.main`
  display: flex;
  height: 100%;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 908px) {
    flex-direction: column;
  }
`;

const Figure = styled.figure`
  display: flex;
  margin: 0;
`;

const Drawing = styled.img`
  height: 500px;
  width: auto;
  aspect-ratio: attr(width) 
  transition: 0.5s;

  @media (max-width: 1281px) {
    height: 320px;
  }

  @media (max-width: 908px) {
    height: 300px;
    margin-bottom: 40px;
  }

  @media (max-width: 430px) {
    height: 200px;
  }

  @media (max-width: 300px) {
    height: 180px;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <Section>
        <Informations />
        <Figure>
          <Drawing src="/programming.svg" className="" alt="Drawing" />
        </Figure>
      </Section>
    </Wrapper>
  );
};

export default Main;
