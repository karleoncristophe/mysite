import styled from "styled-components";
import Text from "../../../../common/Text";
import InstagramIcon from "../../../../public/Instagram.svg";
import WhatsAppImage from "../../../../public/WhatsApp.svg";
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

const Instagram = styled.div`
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

const WhatsApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60.56px;
  width: 268px;
  background: #7c2cbf;
  border-radius: 25.4545px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <InstagramContet>
        <Instagram>
          <Text style={{ color: "#000" }} size={1.6}>
            Instagram
          </Text>
          <Image
            src={InstagramIcon}
            alt="Instagram"
            height="45.56px"
            width="45.55px"
            style={{ paddingRight: "15px" }}
          />
        </Instagram>
      </InstagramContet>
      <WhatsAppContet>
        <WhatsApp>
          <Image
            src={WhatsAppImage}
            alt="WhatsApp"
            height="45.56px"
            width="45.55px"
          />
          <Text size={1.6} weight={700} style={{ marginRight: "10px" }}>
            WhatsApp
          </Text>
        </WhatsApp>
      </WhatsAppContet>
    </Wrapper>
  );
};

export default Footer;
