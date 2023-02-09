import styled from "styled-components";
import THEME from "../styles";
// import H from "../assets/logoH.PNG";

export const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${THEME.COLORS.primary};
`;

export const Background = styled.div`
  height: 100vh;
  background-image: url("https://img.freepik.com/fotos-gratis/empresarios-em-reuniao-de-diretoria_53876-138090.jpg?w=2000&t=st=1675967956~exp=1675968556~hmac=b7586b65c91d9e79a32b6ec4489c64e243e3148cea024994cd3455bfc5e06d68");
  /* background-image: url("https://images.pexels.com/photos/2174719/pexels-photo-2174719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"); */
  background-attachment: fixed;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

// =========================== Section1 ===========================

export const Section1 = styled.div`
  height: 100vh;
  background-color: ${THEME.COLORS.black};
  opacity: 0.9;
  align-items: center;
`;

export const TopS1 = styled.div`
  display: flex;
  height: 20%;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${THEME.COLORS.black};

  .logo {
    /* width: 200px; */
    /* height: auto; */
    margin: 20px;
    cursor: pointer;
    transition: all 1s;

    :hover {
      transform: scale(0.9);
    }
  }

  .ContainerTitlesTopS1 {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  .menuMobile {
    display: none;
    @media (max-width: 1000px) {
      display: flex;
      justify-content: center;
      align-items: center;
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
  animation: leftToRight 1s ease-in;
  animation-delay: 0ms;

  @keyframes leftToRight {
    from {
      transform: translateX(-500px);
    }
    to {
      transform: translateX(0px);
    }
  }

  @media (max-width: 1000px) {
    width: 85%;

    .titleTop {
      font-size: ${THEME.SIZES.extraLarge}px;
    }
  }
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
  cursor: pointer;
  transition: all 1s;
  background-color: ${THEME.COLORS.primary};

  :hover {
    background-color: transparent;
    border: 2px solid ${THEME.COLORS.success};
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

// ================================================================

// =========================== Section2 ===========================
export const Section2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
  padding: 48px;
  background-color: #156e9f;
  background-image: radial-gradient(
      at 47% 33%,
      hsl(0, 0%, 0%) 0,
      transparent 59%
    ),
    radial-gradient(at 82% 65%, hsl(198, 0%, 0%) 0, transparent 55%);

  @media (max-width: 1000px) {
    width: 80%;
    height: 180vh;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Quadros = styled.div`
  display: flex;
  width: 42%;
  height: 30%;
  padding: 16px;
  /* background-color: ${THEME.COLORS.primary}; */
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 5px 5px 15px black;

  backdrop-filter: blur(8px) saturate(188%);
  -webkit-backdrop-filter: blur(8px) saturate(188%);
  background-color: rgba(255, 255, 255, 0.31);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);

  .logoCard {
    width: 80px;
    height: 80px;
    transition: all 2s;

    :hover {
      cursor: pointer;
      transform: scale(1.4);
    }
  }

  @media (max-width: 1000px) {
    width: 85%;
    height: 40%;
    margin: 24px 0px;
  }
`;

// ================================================================
