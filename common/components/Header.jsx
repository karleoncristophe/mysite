import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkMode';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.darkMode ? ' #1c1c1c' : ' #fffff')};
  width: 100%;
  margin-top: 15px;
  margin-bottom: 10px;
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

  @media (max-width: 300px) {
    width: 130px;
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

  @media (max-width: 300px) {
    width: 23px;
    height: 23px;
  }
`;
const Social = styled.img`
  height: 100%;
  width: 100%;
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
  cursor: pointer;

  @media (max-width: 430px) {
    background-size: 30px;
    width: 35px;
    height: 35px;
  }

  @media (max-width: 300px) {
    background-size: 25px;
    width: 30px;
    height: 30px;
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

  @media (max-width: 430px) {
    background-size: 30px;
    width: 35px;
    height: 35px;
  }

  @media (max-width: 300px) {
    background-size: 25px;
    width: 30px;
    height: 33px;
  }
`;

const socialMedia = [
  {
    id: 0,
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100009449735779',
    image: '/facebook.svg',
  },
  {
    id: 1,
    name: 'Github',
    link: 'https://github.com/karleoncristophe',
    image: '/github.svg',
  },
  {
    id: 2,
    name: 'Instagram',
    link: 'https://www.instagram.com/karleoncristophe/',
    image: '/instagram.svg',
  },
  {
    id: 3,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/karleon-cristophe-07657b221/',
    image: '/linkedin.svg',
  },
  {
    id: 4,
    name: 'Twitter',
    link: 'https://twitter.com/karleoncris',
    image: '/twitter.svg',
  },
];

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const handleDarkMode = () => {
    setDarkMode(false);
  };

  const handleLightMode = () => {
    setDarkMode(true);
  };
  return (
    <Wrapper darkMode={darkMode}>
      <Figure>
        {socialMedia.map((item, index) => (
          <Link
            target="_blank"
            rel="noopener"
            name={item.name}
            href={item.link}
            key={item.id + index.toString()}
          >
            <Social src={item.image} alt={item.name} />
          </Link>
        ))}
      </Figure>
      <ButtonContent>
        <LightMode
          onClick={handleLightMode}
          darkMode={darkMode}
          aria-label="Light"
        />
        <DarkMode
          onClick={handleDarkMode}
          darkMode={darkMode}
          aria-label="Dark"
        />
      </ButtonContent>
    </Wrapper>
  );
};

export default Header;
