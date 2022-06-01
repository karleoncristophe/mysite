import styled from "styled-components";
import Link from "../../../../common/Link";
import Text from "../../../../common/Text";
import data from "./data";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InstagramContet = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const WhatsAppContet = styled.div`
  display: flex;
  width: 100%;
`;

const LinkInstagram = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60.56px;
  width: 268px;
  padding-left: 1.5%;
  margin-top: 15px;
  background: #ffffff;
  border-radius: 48px;
  cursor: pointer;
  border: none;
`;

const InstagramImage = styled.img`
  display: flex;
  position: relative;
  left: 3%;
  height: 55%;
  width: 60px;
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
      <InstagramContet>
        <LinkInstagram
          onClick={() => Link({ link: data.link.linkToInstagram })}
        >
          <Text style={{ color: "#000" }} size={1.6}>
            Instagram
          </Text>
          <InstagramImage src="/Instagram.svg" alt="Instagram" />
        </LinkInstagram>
      </InstagramContet>
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
