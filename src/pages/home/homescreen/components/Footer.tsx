import styled from "styled-components";
import Text from "../../../../common/Text";
import Image from "next/image";

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

const LinkInstagram = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60.56px;
  width: 268px;
  padding-left: 1.5%;
  margin-top: 15px;
  background: #ffffff;
  border-radius: 48px;
`;

const InstagramImage = styled.img`
  display: flex;
  height: 55%;
  width: 60px;
`;

const WhatsAppImage = styled.img`
  display: flex;
  height: 60%;
  width: 60px;
`;

const LinkWhatsApp = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60.56px;
  width: 268px;
  background: #7c2cbf;
  border-radius: 25.4545px;
`;

const Footer = () => {
  const linkToWpp =
    "https://api.whatsapp.com/send?phone=5521981454891&text=Ol%C3%A1!%20Preciso%20de%20uma%20ajudinha%20sua%20em%20um%20projeto!%20";
  const linkToInstagram = "https://www.instagram.com/karleoncristophe/";
  return (
    <Wrapper>
      <InstagramContet>
        <LinkInstagram href={linkToInstagram}>
          <Text style={{ color: "#000" }} size={1.6}>
            Instagram
          </Text>
          <InstagramImage
            src="/Instagram.svg"
            alt="Instagram"
            style={{ paddingRight: "10px" }}
          />
        </LinkInstagram>
      </InstagramContet>
      <WhatsAppContet>
        <LinkWhatsApp href={linkToWpp}>
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
