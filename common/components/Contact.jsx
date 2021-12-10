import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkMode';

const Wrapper = styled.footer`
  display: flex;
  margin-top: 15px;
  width: 100%;
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
`;

const Contact = () => {
  const { darkMode } = useDarkMode(false);
  return (
    <Wrapper>
      <WppButton darkMode={darkMode}>WhatsApp</WppButton>
      <TelButton darkMode={darkMode}>Telegram</TelButton>
    </Wrapper>
  );
};

export default Contact;
