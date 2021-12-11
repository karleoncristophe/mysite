import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkMode';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.darkMode ? ' #1c1c1c' : ' #fffff')};
  width: 100%;
  margin-top: 10px;
`;

const Figure = styled.figure`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 0;
  @media (max-width: 425px) {
    width: 200px;
  }
  @media (max-width: 320px) {
    width: 150px;
  }
`;

const Link = styled.a`
  width: 40px;
  height: 40px;
  background: #7b2cbf;
  border-radius: 50%;
  cursor: pointer;

  &:active {
    transform: scale(1);
  }
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 425px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 320px) {
    width: 28px;
    height: 28px;
  }
`;
const Social = styled.img`
  height: 100%;
  border-radius: 50%;

  &:hover {
    transform: scale(1.2);
    transform: rotate(360deg);
    transition: 0.8s;
  }
`;

const ButtonContent = styled.div`
  display: flex;
`;

const DarkMode = styled.button`
  height: 50px;
  width: 50px;
  background: url('/moon.png') no-repeat;
  background-size: 32px;
  background-position: center;
  border: ${props => (props.darkMode ? ' none' : ' 3px solid #7B2CBF')};
  border-left: none;
  border-right: none;
  border-top: none;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  cursor: pointer;
  @media (max-width: 425px) {
    background-size: 35px;
    height: 40px;
    width: 40px;
  }
`;

const LightMode = styled.button`
  height: 50px;
  width: 50px;
  background: url('/sun.png') no-repeat;
  background-position: center;
  background-size: 38px;
  border: ${props => (props.darkMode ? ' 3px solid #7B2CBF' : ' none')};
  border-left: none;
  border-right: none;
  border-top: none;

  cursor: pointer;
  @media (max-width: 425px) {
    height: 40px;
    width: 40px;
  }
`;

const socialLogo = [
  {
    id: 0,
    image: '/facebook.svg',
  },
  { id: 1, image: '/github.svg' },
  { id: 2, image: '/instagram.svg' },
  { id: 3, image: '/linkedin.svg' },
  { id: 4, image: '/twitter.svg' },
];

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode(false);

  const handleDarkMode = () => {
    setDarkMode(false);
  };

  const handleLightMode = () => {
    setDarkMode(true);
  };
  return (
    <Wrapper darkMode={darkMode}>
      <Figure>
        {socialLogo.map((item, index) => (
          <Link key={item.id + index.toString()}>
            <Social src={item.image} className="" />
          </Link>
        ))}
      </Figure>
      <ButtonContent>
        <LightMode onClick={handleLightMode} darkMode={darkMode} />
        <DarkMode onClick={handleDarkMode} darkMode={darkMode} />
      </ButtonContent>
    </Wrapper>
  );
};

export default Header;
