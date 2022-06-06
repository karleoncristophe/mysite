import { useState } from "react";
import styled from "styled-components";
import Link from "../../../../common/Link";
import Text from "../../../../common/Text";
import data from "./data";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleContent = styled.div`
  @media (max-width: 946px) {
    display: none;
  }
`;

const ContentText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 946px) {
    display: none;
  }

  @media (max-width: 1600px) {
    display: none;
  }
`;

const LinkToTitle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  position: relative;
  left: -20px;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  @media (min-width: 1600px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Header = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  return (
    <Wrapper>
      <TitleContent>
        <Text size={1.87}>Karleon C.</Text>
      </TitleContent>
      <Button onClick={() => openModal()}>
        <Image src="/menu.svg" />
      </Button>

      {modal === true && <Menu setModal={setModal} />}
      <ContentText>
        {data.text.map((item) => (
          <LinkToTitle
            key={item.id}
            onClick={() => Link({ link: item.link, target: "_top" })}
          >
            <Text size={1.87}>{item.text}</Text>
          </LinkToTitle>
        ))}
      </ContentText>
    </Wrapper>
  );
};

const MenuContet = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #171522;
  height: 100vh;
  width: 100vw;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
`;

const ModalText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
`;

interface Props {
  setModal: (data: boolean) => void;
}

function Menu({ setModal }: Props) {
  const closeModal = (item?: string) => {
    Link({ link: item, target: "_top" });
    setModal(false);
  };
  return (
    <MenuContet>
      <ButtonClose>
        <Image src="/close.svg" onClick={() => closeModal()} />
      </ButtonClose>
      <ModalText>
        {data.text.map((item) => (
          <LinkToTitle
            key={item.id}
            onClick={() => closeModal(item.link)}
            style={{ margin: "30px" }}
          >
            <Text size={1.87}>{item.text}</Text>
          </LinkToTitle>
        ))}
      </ModalText>
    </MenuContet>
  );
}

export default Header;
