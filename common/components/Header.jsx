import styled from 'styled-components';
import GitHubDarkImage from '../../public/githubDark.png';
import GitHubLigthImage from '../../public/githubLight.png';
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${props => (props.darkMode ? ' #1c1c1c' : ' #fffff')};
  width: 100%;
`;
const Figure = styled.figure`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const SocialMedia = styled.img`
  height: 30px;
  &:hover {
    transform: scale(1.2);
    transform: rotate(360deg);
    transition: 0.8s;
  }
`;

const ButtonContent = styled.figure``;

const DarkMode = styled.button`
  height: 40px;
  width: 40px;
  background: url('https://cdn-icons-png.flaticon.com/512/3094/3094159.png')
    no-repeat;
  background-position: center;
  background-size: 30px;
  border: 1px solid white;
  border-left: none;
  cursor: pointer;
`;

const LightMode = styled.button`
  height: 40px;
  width: 40px;
  background: url('https://cdn-icons.flaticon.com/png/512/3073/premium/3073665.png?token=exp=1638821600~hmac=d0f848549aa5fac2871290eea7ff72b0')
    no-repeat;
  background-position: center;
  background-size: 30px;
  border: 1px solid white;
  cursor: pointer;
`;

const Header = ({ darkMode, handleLightMode, handleDarkMode }) => {
  return (
    <Wrapper darkMode={darkMode}>
      <Figure>
        <SocialMedia src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" />
        <SocialMedia src={darkMode ? '/githubLight.png' : '/githubDark.png'} />
        <SocialMedia src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" />
        <SocialMedia src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />{' '}
        <SocialMedia src="https://cdn-icons.flaticon.com/png/512/3938/premium/3938036.png?token=exp=1638820565~hmac=fc30d1be8119d3e324cc891a6de908b2" />
      </Figure>
      <ButtonContent>
        <LightMode onClick={handleLightMode} />
        <DarkMode onClick={handleDarkMode} />
      </ButtonContent>
    </Wrapper>
  );
};

export default Header;
