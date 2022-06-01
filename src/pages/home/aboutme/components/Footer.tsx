import styled from "styled-components";
import Space from "../../../../common/Space";
import Text from "../../../../common/Text";
import data, { Idata } from "./data";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 8%;
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
  padding: 1.5%;
`;

const Image = styled.img`
  width: 32.67px;
  height: 35px;
`;

const ImageAndTextContet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageAndText = styled.div`
  display: flex;
  align-items: center;
`;

const TimeExperienceContent = styled.div``;

const TimeExperienceBarContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  background: #cab0df;
  border-radius: 50px;
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
`;

const Footer = () => {
  return (
    <Wrapper>
      <Text size={3.12} weight={600} style={{ lineHeight: "55px" }}>
        Habilidades
      </Text>
      <Text size={1.87} style={{ marginBottom: "6%" }}>
        Minha experiência de trabalho
      </Text>
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
                <Text size={1.25} weight={600}>
                  {item.text}
                </Text>
              </ImageAndText>
              <Text size={1.25} weight={600}>
                {item.TimeExperience}
              </Text>
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
