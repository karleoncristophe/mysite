import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkMode';
import Contact from './Contact';
import media from '../components/BREAK_POINT';

const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: scroll;
  @media (max-width: 1025px) {
  }
  @media (max-width: 908px) {
    flex-direction: column;
    width: 100%;
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
  transition: 1s;
  color: ${props => (props.darkMode ? ' #1c1c1c' : ' #9D4EDD')};
  font-family: 'Patua One', cursive;
  font-weight: 400;
  margin: 0;

  @media (max-width: 1025px) {
    font-size: 2.5rem;
    transition: 1s;
  }

  @media (max-width: 1281px) {
    margin-bottom: 10px;
    font-size: 3rem;
    transition: 1s;
  }
  @media (max-width: 908px) {
    margin-top: 40px;
    margin-bottom: 12px;
  }
  @media (max-width: 425px) {
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.span`
  font-size: 1.8rem;
  margin-top: -20px;
  font-family: 'Patua One', cursive;
  text-align: end;
  width: 100%;
  color: #b991da;
  transition: 1s;
  @media (max-width: 908px) {
    margin-top: 40px;
  }
  @media (max-width: 1025px) {
    margin-top: -10px;
    font-size: 1.1rem;
  }
  @media (max-width: 1281px) {
    font-size: 1.4rem;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-family: 'Mitr', sans-serif;
  line-height: 25px;
  font-weight: 400;
  color: ${props => (props.darkMode ? ' #414141' : '#5f5f5f')};
  transition: 1s;

  @media (max-width: 1025px) {
    margin: 0;
    margin-top: 10px;
    font-size: 1rem;
    transition: 1s;
  }

  @media (max-width: 1281px) {
    margin: 0;
    margin-top: 10px;
    font-size: 1.2rem;
    transition: 1s;
  }
`;

const Figure = styled.figure`
  display: flex;
  margin: 0;
`;

const Drawing = styled.img`
  width: 600px;
  height: 600px;
  transition: 1s;
  @media (max-width: 1025px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 1281px) {
    width: 450px;
    height: 450px;
  }
  @media (max-width: 908px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 320px) {
    width: 250px;
    height: 250px;
  }
`;

const Main = () => {
  const { darkMode } = useDarkMode(false);
  return (
    <Wrapper>
      <Section>
        <Article>
          <Title darkMode={darkMode}>
            Olá! <br />
            Eu sou o Karleon Cristophe
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
          <Drawing src="/programming.svg" />
        </Figure>
      </Section>
    </Wrapper>
  );
};

export default Main;
