import { createGlobalStyle } from "styled-components";
import THEME from './index'

export const GlobalStyle = createGlobalStyle`
  html{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    max-width: 100% !important;
    background-color: ${THEME.COLORS.primary};
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Urbanist', sans-serif;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    background-color: white;
    max-width: 100% !important;
  }
`;
