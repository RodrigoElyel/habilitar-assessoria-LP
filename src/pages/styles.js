import styled from "styled-components";
import THEME from "../styles";
import Predio from "../assets/predio.jpg";

export const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${THEME.COLORS.primary};
`;

export const Background = styled.div`
  height: 100vh;
  background-image: url(${Predio});
  background-attachment: fixed;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

// =========================== Section1 ===========================

export const Section1 = styled.div`
  height: 100vh;
  background-color: ${THEME.COLORS.primary};
  opacity: 0.9;
  align-items: center;
`;

export const TopS1 = styled.div`
  display: flex;
  height: 20%;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${THEME.COLORS.white};

  .logo {
    width: 200px;
    height: auto;
    margin: 20px;
    cursor: pointer;
    transition: all 1s;

    :hover {
      width: 100px;
      margin: 40px;
    }
  }
`;

export const BottomS1 = styled.div`
  display: flex;
  height: 80%;
  padding: 80px 0px;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitlesTopS1 = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  h1:hover {
    text-decoration: underline;
    color: ${THEME.COLORS.black};
  }
`;

export const ContainerTitlesBottomS1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 80%;
  justify-content: space-evenly;
`;

export const ButtonBottomS1 = styled.button`
  display: flex;
  width: 60%;
  height: 60px;
  align-self: center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  border-radius: 50px;
  border: none;
  background-color: ${THEME.COLORS.secondary};
  cursor: pointer;
  transition: all 1s;

  :hover {
    background-color: transparent;
    border: 2px solid ${THEME.COLORS.success};
  }
`;

// ================================================================

// =========================== Section2 ===========================
export const Section2 = styled.div`
  height: 100vh;
  background-color: ${THEME.COLORS.secondary};
`;

// ================================================================
