import React from "react";
import * as S from "./styles";
import Text from "../components/Text";
import logo from "../assets/logoHA.png";
import THEME from "../styles";
import { BsWhatsapp } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Home() {
  const CustomTagA = ({ title, section, size }) => {
    return (
      <Text
        size={size ? size : THEME.SIZES.large}
        color={THEME.COLORS.primary}
        bold
        align="center"
      >
        <a
          href={"#" + section}
          style={{
            display: "block",
            textDecoration: "none",
            color: THEME.COLORS.primary,
          }}
        >
          {title}
        </a>
      </Text>
    );
  };
  return (
    <S.Screen>
      <S.Background>
        <S.Section1 id="inicio">
          <S.TopS1>
            <img className="logo" src={logo} alt="logomarca" />

            <S.ContainerTitlesTopS1 className="ContainerTitlesTopS1">
              <CustomTagA title="INÍCIO" section="inicio" />
              <CustomTagA title="SERVIÇOS" section="servicos" />
              <CustomTagA title="QUEM SOMOS" section="" />
              <CustomTagA title="CONTATO" section="" />
            </S.ContainerTitlesTopS1>

            <S.ContainerTitlesTopS1 className="menuMobile">
              <Popup
                trigger={
                  <button style={{ border: "none" }}>
                    <FiMenu size={THEME.SIZES.extraLarge} />
                  </button>
                }
                position="bottom right"
              >
                <div
                  style={{
                    display: "flex",
                    width: 200,
                    height: 200,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <CustomTagA
                    title="INÍCIO"
                    section="inicio"
                    size={THEME.SIZES.mediuLarge}
                  />
                  <CustomTagA
                    title="SERVIÇOS"
                    section="servicos"
                    size={THEME.SIZES.mediuLarge}
                  />
                  <CustomTagA
                    title="QUEM SOMOS"
                    section=""
                    size={THEME.SIZES.mediuLarge}
                  />
                  <CustomTagA
                    title="CONTATO"
                    section=""
                    size={THEME.SIZES.mediuLarge}
                  />
                </div>
              </Popup>
            </S.ContainerTitlesTopS1>
          </S.TopS1>
          <S.BottomS1>
            <S.ContainerTitlesBottomS1>
              <Text
                className="titleTop"
                size={THEME.SIZES.extraLarge + 18}
                color={THEME.COLORS.black}
                bold
                align="center"
              >
                Advogados Especialistas em Licitações e Contratos
              </Text>
              <Text
                size={THEME.SIZES.large}
                color={THEME.COLORS.black}
                align="center"
              >
                Há mais de 15 anos atuando em defesas das empresas para garantir
                a contratação com o Poder Público.
              </Text>

              <S.ButtonBottomS1
                onClick={() => {
                  window.open("https://wa.me/5598981778773");
                }}
              >
                <BsWhatsapp
                  size={THEME.SIZES.mediuLarge}
                  color={THEME.COLORS.black}
                />
                <Text
                  size={THEME.SIZES.mediuLarge}
                  color={THEME.COLORS.black}
                  align="center"
                >
                  Fale agora com o Especialista
                </Text>
              </S.ButtonBottomS1>
              <Text
                size={THEME.SIZES.mediuLarge}
                color={THEME.COLORS.black}
                align="center"
              >
                Atendimento Rápido, Seguro e Online
              </Text>
            </S.ContainerTitlesBottomS1>
          </S.BottomS1>
        </S.Section1>
        <S.Section2 id="servicos"></S.Section2>
      </S.Background>
    </S.Screen>
  );
}

export default Home;
