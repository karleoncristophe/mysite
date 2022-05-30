import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Wrapper = styled.span<Props>`
  color: ${(p) => (p.color ? p.color : p.theme.colors.text.primary)};
  font-size: ${(p) => p.size}rem;
  font-weight: ${(p) => (p.weight ? p.weight : 400)};
  text-align: ${(p) => (p.align ? p.align : "left")};
  font-family: "Poppins", sans-serif;
`;

interface Props {
  children?: any;
  color?: string;
  size?: number;
  weight?: 400 | 500 | 600 | 700;
  align?: "center" | "left" | "right" | "justify";
  style?: React.CSSProperties;
}

const Text = ({ children, color, size, weight, align, style }: Props) => (
  <Wrapper
    align={align}
    weight={weight}
    size={size}
    color={color}
    style={style}
  >
    {children}
  </Wrapper>
);

Text.defaultProps = {
  size: 1,
  color: theme.colors.text.primary,
};

export default Text;
