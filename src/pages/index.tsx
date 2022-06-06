import styled from "styled-components";
import SEO from "../common/SEO";
import AboutMe from "./home/aboutme";
import ContactMe from "./home/contactme";
import HomeScreen from "./home/homescreen";
import MoreInformations from "./home/moreinformations";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default function Home() {
  return (
    <Wrapper>
      <HomeScreen />
      <AboutMe />
      <ContactMe />
      <MoreInformations />
      <SEO />
    </Wrapper>
  );
}
