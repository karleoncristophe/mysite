import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkMode';

const Wrapper = styled.footer`
  display: flex;
  margin-top: 15px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const WppButton = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${props => (props.darkMode ? ' #f7f7f7' : '#7b2cbf')};
  transition: 1s;
  background: ${props => (props.darkMode ? ' #7b2cbf' : '#ffff')};

  &:hover {
    color: #7b2cbf;
    background: none;
    transition: 1s;
  }

  @media (max-width: 1281px) {
    font-size: 1.1rem;
    height: 40px;
    width: 130px;
    transition: 1s;
  }
`;

const TelButton = styled.button`
  font-size: 1.2rem;
  height: 50px;
  width: 150px;
  border: none;
  margin-left: 10px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  background: ${props => (props.darkMode ? ' #7b2cbf' : 'none')};
  color: #ffff;
  transition: 1s;

  &:hover {
    color: #7b2cbf;
    background: #ffffff;
    transition: 1s;
  }

  @media (max-width: 1281px) {
    transition: 1s;
    font-size: 1.1rem;
    height: 40px;
    width: 130px;
  }
`;

const Link = styled.a``;

const Contact = () => {
  const { darkMode } = useDarkMode(false);
  return (
    <Wrapper>
      <Link
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5521981454891&text=Ol%C3%A1!%20Preciso%20de%20uma%20ajudinha%20sua%20em%20um%20projeto!%20"
      >
        <WppButton darkMode={darkMode}>WhatsApp</WppButton>
      </Link>
      <Link target="_blank" href="https://t.me/karleoncristophe">
        <TelButton darkMode={darkMode}>Telegram</TelButton>
      </Link>
    </Wrapper>
  );
};

export default Contact;
