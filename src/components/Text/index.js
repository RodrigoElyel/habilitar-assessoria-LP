import styled from "styled-components";
import THEME from "../../styles";

const Text = styled.h1`
  margin: 0px;
  padding: 0px;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  font-size: ${({ size }) => (size ? size : THEME.SIZES.medium)}px;
  text-align: ${({ align }) => align || "left"};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  color: ${({ color }) => color || THEME.COLORS.black};
  text-transform: ${({ transform }) => (transform ? transform : "none")};
  text-decoration: ${({ decoration }) => (decoration ? decoration : "none")};
  cursor: ${({ cursor }) => (cursor ? cursor : "normal")};
`;

export default Text;
