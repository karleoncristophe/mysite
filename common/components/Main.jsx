import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  background: red;
  width: 100%;
  height: 100%;
`;

const Section = styled.section``;

const Article = styled.article``;

const Title = styled.h1`
  font-size: 2rem;
`;

const Text = styled.p``;

const Main = () => {
  return (
    <Wrapper>
      <Section>
        <Article>
          <Title>
            Olá!! <br />
            eu sou o Karleon Cristophe
          </Title>
          <Text>
            Um NEET japonês de 34 anos não identificado é despejado de sua casa
            após a morte de seus pais. Após alguma auto-introspecção, ele
            conclui que sua vida foi, em última análise, sem sentido. ... Ele
            resolve ter sucesso em sua nova vida, descartando sua identidade
            passada para sua nova vida como Rudeus Greyrat.
          </Text>
        </Article>
      </Section>
    </Wrapper>
  );
};

export default Main;
