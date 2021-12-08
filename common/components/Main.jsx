import styled from 'styled-components';

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
  /* font-family: 'Inter', sans-serif; */
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #b1b1b1;
`;

const Figure = styled.figure`
  display: flex;
  margin: 0;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
`;

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
        <Figure>
          <Image src="/undraw.svg" />
        </Figure>
      </Section>
    </Wrapper>
  );
};

export default Main;
