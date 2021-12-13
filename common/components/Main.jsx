import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkMode';
import Contact from './Contact';

const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media (max-width: 908px) {
    flex-direction: column;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media (max-width: 908px) {
    display: flex;
    width: 100%;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  transition: 0.5s;
  color: ${props => (props.darkMode ? ' #1c1c1c' : ' #9D4EDD')};
  font-family: 'Patua One', cursive;
  font-weight: 400;
  margin: 0;

  @media (max-width: 1025px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1281px) {
    font-size: 3rem;
  }

  @media (max-width: 908px) {
    margin-top: 40px;
    margin-bottom: 12px;
  }

  @media (max-width: 600px) {
    text-align: center;
  }

  @media (max-width: 425px) {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.span`
  font-size: 1.8rem;
  font-family: 'Patua One', cursive;
  text-align: end;
  width: 100%;
  color: #b991da;
  transition: 0.5s;

  @media (max-width: 1025px) {
    font-size: 1.1rem;
  }

  @media (max-width: 1281px) {
    font-size: 1.4rem;
  }
  @media (max-width: 600px) {
    text-align: center;
  }

  @media (max-width: 430px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-family: 'Mitr', sans-serif;
  line-height: 25px;
  font-weight: 400;
  color: ${props => (props.darkMode ? ' #414141' : '#5f5f5f')};
  margin: 0;
  margin-top: 10px;
  transition: 0.5s;

  @media (max-width: 1025px) {
    font-size: 1rem;
  }

  @media (max-width: 1281px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Figure = styled.figure`
  display: flex;
  margin: 0;
`;

const Drawing = styled.img`
  height: 500px;
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
  const { darkMode } = useDarkMode();
  return (
    <Wrapper>
      <Section>
        <Article>
          <Title darkMode={darkMode}>
            Olá! <br />
            Eu sou o <br />
            Karleon Cristophe
          </Title>
          <Subtitle>_Fullstack developer_</Subtitle>
          <Text darkMode={darkMode}>
            Atualmente estudando/trabalhando com Mobile, Frontend e Backend. Amo
            aprender novas tecnologias e enfrentar novos desafios na
            programação. Iniciei a carreira visando desenvolvimento de jogos,
            que é algo que gosto muito, mas com o decorrer do tempo me apaixonei
            por desenvolvimento Web e Mobile. Estudo/Trabalho com ReactJS, React
            Native e NodeJS.
          </Text>
          <Contact />
        </Article>
        <Figure>
          <Drawing src="/programming.svg" className="" />
        </Figure>
      </Section>
    </Wrapper>
  );
};

export default Main;
