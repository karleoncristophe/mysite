import styled from 'styled-components';
const Wrapper = styled.header`
  display: flex;

  width: 100%;
`;

const Header = () => {
  return (
    <Wrapper>
      <span style={{ color: '#fff' }}>Hello World</span>
    </Wrapper>
  );
};

export default Header;
