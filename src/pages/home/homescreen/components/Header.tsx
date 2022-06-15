import { useState } from "react";
import styled from "styled-components";
import Link from "../../../../common/Link";
import Text from "../../../../common/Text";
import data from "./data";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContent = styled.div`
  &&:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.1, 1.1);
  }
`;

const ContentText = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 855px) {
    display: none;
  }
`;

const LinkToTitle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 15px;

  @media (hover: hover) and (pointer: fine) {
    &&:hover {
      cursor: pointer;
      transition: 0.3s;
      transform: scale(1.1, 1.1);
    }
  }
`;

const Button = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 50px;

  @media (max-width: 855px) {
    display: flex;
  }
`;

const Image = styled.img`
  height: 45px;
  width: 45px;
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

      {modal === true && <Menu setModal={setModal} modal={modal} />}
      <ContentText>
        {data.text.map((item) => (
          <LinkToTitle
            key={item.id}
            onClick={() => Link({ link: item.link, target: "_top" })}
          >
            <Text size={1.47}>{item.text}</Text>
          </LinkToTitle>
        ))}
      </ContentText>
    </Wrapper>
  );
};

const MenuContet = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: absolute;
  transition: all ease-out 0.8s;
  /* height: ${(p) => (p.modal ? 100 : 0)}vh; */
  width: 100vw;
  padding: 20px;
  background: #171522;
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
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 100%;
`;

interface Props {
  modal: boolean;
  setModal?: (data: boolean) => void;
}

function Menu({ setModal, modal }: Props) {
  const closeModal = (item?: string) => {
    Link({ link: item, target: "_top" });
    setModal(false);
  };
  return (
    <MenuContet modal={modal}>
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
