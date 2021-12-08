import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkMode';
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
  color: ${props => (props.darkMode ? ' #1c1c1c' : ' #fffff')};
  /* font-family: 'Inter', sans-serif; */
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1.4rem;
  color: ${props => (props.darkMode ? ' #313131' : '#5f5f5f')};
`;

const Figure = styled.figure`
  display: flex;

  margin: 0;
`;

const Drawing = styled.img`
  width: 500px;
  height: 500px;
`;

const Main = () => {
  const { darkMode } = useDarkMode(false);
  return (
    <Wrapper>
      <Section>
        <Article>
          <Title darkMode={darkMode}>
            Hello!! <br />I am Karleon Cristophe
          </Title>
          <Text darkMode={darkMode}>
            Um NEET japonês de 34 anos não identificado é despejado de sua casa
            após a morte de seus pais. Após alguma auto-introspecção, ele
            conclui que sua vida foi, em última análise, sem sentido. ... Ele
            resolve ter sucesso em sua nova vida, descartando sua identidade
            passada para sua nova vida como Rudeus Greyrat.
          </Text>
        </Article>
        <Figure>
          <Drawing src="/programming.svg" />
        </Figure>
      </Section>
    </Wrapper>
  );
};

export default Main;
