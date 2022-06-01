import styled from "styled-components";

const Wrapper = styled.div<Props>`
  display: flex;
  width: ${(p) => p.width}%;
  height: ${(p) => p.height}px;
`;

interface Props {
  children?: any;
  height?: number;
  width?: number;
}

const Space = ({ height, children, width }: Props) => {
  return (
    <Wrapper height={height} width={width}>
      {children}
    </Wrapper>
  );
};

export default Space;
