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
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  transition: 1s;
  color: ${props => (props.darkMode ? ' #1c1c1c' : ' #9D4EDD')};
  font-family: 'Patua One', cursive;
  font-weight: 400;
  margin: 0;
`;

const Subtitle = styled.span`
  font-size: 1.8rem;
  margin-top: -20px;
  font-family: 'Patua One', cursive;
  text-align: end;
  width: 100%;
  color: #b991da;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-family: 'Mitr', sans-serif;
  line-height: 25px;
  font-weight: 400;
  color: ${props => (props.darkMode ? ' #414141' : '#5f5f5f')};
  transition: 1s;
`;

const Figure = styled.figure`
  display: flex;
  margin: 0;
`;

const Drawing = styled.img`
  width: 600px;
  height: 600px;
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
            que é algo que gosto muito, mas com o decorrer do tempo me
            interessei em desenvolvimento Web e Mobile. Trabalho/Estudo com
            ReactJS, React Native e NodeJS.
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
