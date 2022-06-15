import styled from "styled-components";
import Text from "../../../../common/Text";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 1011px) {
    align-items: center;
  }
  /* @media (max-width: 549px) {
    align-items: center;
  } */
`;

const Title = styled.span`
  font-size: 1.87rem;
  font-weight: 600;

  @media (max-width: 1011px) {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 10px;
  }

  /* @media (max-width: 549px) {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 10px;
  } */
`;
const SubTitle = styled.span`
  display: none;

  @media (max-width: 1011px) {
    display: flex;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 15px;
  }
  /* @media (max-width: 549px) {
    display: flex;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 15px;
  } */
`;

const Header = () => {
  return (
    <Wrapper>
      <Title style={{ lineHeight: "22px" }}>Karleon C.</Title>
      <SubTitle style={{ lineHeight: "22px" }}>Fullstack Developer_</SubTitle>
    </Wrapper>
  );
};

export default Header;
