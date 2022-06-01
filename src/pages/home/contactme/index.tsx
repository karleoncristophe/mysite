import React from "react";
import styled from "styled-components";
import Text from "../../../common/Text";
import data from "./data";

const Wrapper = styled.div`
  display: flex;
  height: 263px;
  align-items: center;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  background: #232035;
`;

const WppAndEmailContent = styled.div`
  display: flex;
  width: 100%;
  padding: 2%;
`;

const Image = styled.img`
  margin-right: 3%;
  margin-top: 1.4%;
  width: 45.98px;
  height: 46.2px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactMe = () => {
  return (
    <Wrapper id="contato">
      {data.map((item) => (
        <WppAndEmailContent key={item.id}>
          <Image src={item.image} alt={item.title} />
          <TextContent>
            <Text size={2.22} weight={600}>
              {item.title}
            </Text>
            <Text size={1.96} weight={500}>
              {item.subtitle}
            </Text>
          </TextContent>
        </WppAndEmailContent>
      ))}
    </Wrapper>
  );
};

export default ContactMe;
