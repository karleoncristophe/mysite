import styled from "styled-components";
import Text from "../../../../common/Text";
import Space from "../../../../common/Space";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 3%;
`;

const TitleContent = styled.div`
  display: flex;
  align-items: center;
`;

const AboutMeContent = styled.div`
  display: flex;
  align-items: center;
`;

const Arrow = styled.img`
  height: 16px;
  width: 18px;
  margin-right: 10px;
`;

const Square = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #232035;
  border-radius: 20px 50px 20px 20px;
  border: 2px dashed #a5a1a8;
  padding: 2%;
`;

const Rectangle = styled.div`
  display: flex;
  height: 20%;
  width: 2%;
  background: #7c2cbf;
  border: 2px dashed #a5a1a8;
  border-left: 0px;
  border-radius: 0px 50px 20px 0px;
`;

const text = `Atualmente estudando/trabalhando com Frontend, Backend e Mobile. Amo
aprender novas tecnologias e enfrentar novos desafios na programação.
Iniciei minha carreira como programador visando desenvolvimento de
jogos, que é algo que gosto muito, mas com o decorrer do tempo me
apaixonei por desenvolvimento Web e Mobile. Estudo/Trabalho com
ReactJS, React-Native e NodeJS.`;

const Main = () => {
  return (
    <Wrapper>
      <Square>
        <TitleContent>
          <Arrow src="/Arrow.png" />
          <Text style={{ color: "#B98FDC" }} size={1.12}>
            nano <Text size={1.12}> about</Text>
          </Text>
        </TitleContent>
        <Space height={21} width={100} />
        <AboutMeContent>
          <Text size={1.56}>{text}</Text>
        </AboutMeContent>
      </Square>
      <Rectangle />
    </Wrapper>
  );
};

export default Main;
