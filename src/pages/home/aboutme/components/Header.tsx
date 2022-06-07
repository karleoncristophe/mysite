import styled from "styled-components";
import Text from "../../../../common/Text";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 549px) {
    margin-top: 40px;
  }
`;

const Title = styled.span`
  font-size: 3.12rem;
  font-weight: 600;

  @media (max-width: 549px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.span`
  font-size: 1.87rem;

  @media (max-width: 549px) {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Title style={{ lineHeight: "55px" }}>Quem Sou</Title>
      <SubTitle>Vamos lá me conhecer um pouco...</SubTitle>
    </Wrapper>
  );
};

export default Header;
