import { createGlobalStyle } from "styled-components";
import THEME from './index'

export const GlobalStyle = createGlobalStyle`
  html{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    max-width: 100vw !important;
    background-color: ${THEME.COLORS.black};
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Urbanist', sans-serif;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    height: 100vh;
    box-sizing: border-box;
    background-color: white;
    max-width: 100vw !important;
  }
`;
