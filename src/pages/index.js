import React from "react";
import * as S from "./styles";
import Text from "../components/Text";
import logo from "../assets/logoHA.png";
import THEME from "../styles";
import { BsWhatsapp } from "react-icons/bs";

function Home() {
  return (
    <S.Screen>
      <S.Background>
        <S.Section1>
          <S.TopS1>
            <img className="logo" src={logo} alt="logomarca" />

            <S.ContainerTitlesTopS1>
              <Text size={THEME.SIZES.large} color={THEME.COLORS.primary} bold>
                INÍCIO
              </Text>
              <Text size={THEME.SIZES.large} color={THEME.COLORS.primary} bold>
                SERVIÇOS
              </Text>
              <Text size={THEME.SIZES.large} color={THEME.COLORS.primary} bold>
                QUEM SOMOS
              </Text>
              <Text size={THEME.SIZES.large} color={THEME.COLORS.primary} bold>
                CONTATO
              </Text>
            </S.ContainerTitlesTopS1>
          </S.TopS1>
          <S.BottomS1>
            <S.ContainerTitlesBottomS1>
              <Text
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
                  window.open("https://wa.me/8396106794");
                }}
              >
                <BsWhatsapp size={THEME.SIZES.mediuLarge} />
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
        <S.Section2></S.Section2>
      </S.Background>
    </S.Screen>
  );
}

export default Home;
