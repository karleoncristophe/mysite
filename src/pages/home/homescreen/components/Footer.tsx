import styled from "styled-components";
import Text from "../../../../common/Text";

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
  height: 60.56px;
  width: 268px;
  background: blue;
  border-radius: 25.45px;
`;

const WhatsApp = styled.div`
  display: flex;
  height: 60.56px;
  width: 268px;
  background: yellow;
  border-radius: 25.45px;
`;

const InstagramImage = styled.image``;

const WhatsAppImage = styled.image``;

const Footer = () => {
  return (
    <Wrapper>
      <InstagramContet>
        <Instagram></Instagram>
      </InstagramContet>
      <WhatsAppContet>
        <WhatsApp></WhatsApp>
      </WhatsAppContet>
    </Wrapper>
  );
};

export default Footer;
