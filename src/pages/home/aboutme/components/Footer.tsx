import styled from "styled-components";
import Space from "../../../../common/Space";
import data, { Idata } from "./data";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 8%;
`;

const SkillWrraper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SkillContet = styled.div`
  display: flex;
  margin-top: 2.5%;
  flex-direction: column;
  background: linear-gradient(93.67deg, #232035 0%, #450e73 101.25%);
  border-radius: 20px;
  width: 40%;
  justify-content: space-between;
  height: 125px;
  padding: 20px;

  @media (max-width: 1235px) {
    width: 100%;
  }

  @media (max-width: 549px) {
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 30%;
  height: 30%;

  @media (max-width: 549px) {
    width: 35px;
    height: 35px;
  }
`;

const ImageAndTextContet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageAndText = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 549px) {
    /* align-items: flex-start; */
  }
`;

const TimeExperienceContent = styled.div``;

const TimeExperienceBarContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  background: #cab0df;
  border-radius: 50px;
  @media (max-width: 549px) {
    height: 12px;
  }
`;

const TimeExperienceBar = styled.div<Idata>`
  width: ${(p) => p.width}%;
  height: 100%;
  background: #8f3cd4;
  border-radius: 50px;
`;

const TimeExperienceCircle = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #8f3cd4;
  border: 1px solid #7c2cbf;
  right: 12px;
  @media (max-width: 549px) {
    height: 22px;
    width: 22px;
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
    margin-bottom: 30px;
  }
`;

const Text = styled.span`
  font-size: 1.25rem;
  font-weight: 600;

  @media (max-width: 549px) {
    font-size: 1.1rem;
  }
`;

const Footer = () => {
  return (
    <Wrapper id="habilidades">
      <Title style={{ lineHeight: "55px" }}>Habilidades</Title>
      <SubTitle>Minha experiência de trabalho</SubTitle>
      <SkillWrraper>
        {data.map((item) => (
          <SkillContet key={item.id}>
            <ImageAndTextContet>
              <ImageAndText>
                <Image
                  src={item.image}
                  alt={item.text}
                  style={{ marginRight: "15px" }}
                />
                <Text>{item.text}</Text>
              </ImageAndText>
              <Text>{item.TimeExperience}</Text>
            </ImageAndTextContet>
            <TimeExperienceContent>
              <TimeExperienceBarContent>
                <TimeExperienceBar width={item.width} />
                <TimeExperienceCircle />
              </TimeExperienceBarContent>
            </TimeExperienceContent>
          </SkillContet>
        ))}
      </SkillWrraper>

      <Space width={100} height={90} />
    </Wrapper>
  );
};

export default Footer;
