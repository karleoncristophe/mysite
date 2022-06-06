import styled from "styled-components";
import Link from "../../../../common/Link";
import Text from "../../../../common/Text";
import data from "./data";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  @media (max-width: 946px) {
    display: none;
  }
`;

const WhatsAppContet = styled.div`
  display: flex;
  width: 100%;
`;

const WhatsAppImage = styled.img`
  display: flex;
  height: 60%;
  width: 60px;
`;

const LinkWhatsApp = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60.56px;
  width: 268px;
  background: #7c2cbf;
  border-radius: 25.4545px;
  cursor: pointer;
  border: none;
`;

const Footer = () => {
  return (
    <Wrapper>
      <WhatsAppContet>
        <LinkWhatsApp onClick={() => Link({ link: data.link.linkToWpp })}>
          <WhatsAppImage src="/WhatsApp.svg" />
          <Text size={1.6} weight={700} style={{ marginRight: "10%" }}>
            WhatsApp
          </Text>
        </LinkWhatsApp>
      </WhatsAppContet>
    </Wrapper>
  );
};

export default Footer;
