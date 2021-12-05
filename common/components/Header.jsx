import styled from 'styled-components';
const Wrapper = styled.header`
  display: flex;
  width: 100%;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1 style={{ color: '#fff' }}>Hello World</h1>
    </Wrapper>
  );
};

export default Header;
