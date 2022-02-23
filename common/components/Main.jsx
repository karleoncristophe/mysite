import styled from 'styled-components';
import Informations from './Informations';

const Wrapper = styled.main`
  display: flex;
  height: 100%;

  @media (max-width: 1585px) {
    padding-top: 8%;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1585px) {
    flex-direction: column;
  }
`;

const Figure = styled.figure`
  display: flex;
  margin: 0;

  @media (max-width: 1205px) {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Drawing = styled.img`
  height: 420px;
  width: auto;
  aspect-ratio: attr(width);
  transition: 0.5s;
  transform: translateY(0px);
  animation: float 5s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 1281px) {
    height: 330px;
  }

  @media (max-width: 908px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    margin-top: 15%;
    margin-bottom: 100px;
  }

  @media (max-width: 430px) {
    height: 210px;
  }

  @media (max-width: 300px) {
    height: 170px;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <Section>
        <Informations />
        <Figure>
          <Drawing
            loading="lazy"
            src="/programming.svg"
            className=""
            alt="Drawing"
          />
        </Figure>
      </Section>
    </Wrapper>
  );
};

export default Main;
