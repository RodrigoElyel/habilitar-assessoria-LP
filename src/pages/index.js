import React from "react";
import * as S from "./styles";
import Text from "../components/Text";
// import logo from "../assets/leadership.png";
import logoBlack from "../assets/logoHAblack.png";
import instagram from "../assets/instagram.png";
import THEME from "../styles";
import { BsWhatsapp } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Home() {
  const CustomCard = ({ title, subtitle }) => {
    return (
      <S.Quadros>
        <div className="ContainerTitleCard">
          <Text
            className="titleCard"
            size={THEME.SIZES.large}
            color={THEME.COLORS.primary}
            align="center"
            bold
          >
            {title.toUpperCase()}
          </Text>

          <Text
            className="subTitleCard"
            size={THEME.SIZES.medium}
            color={THEME.COLORS.white}
            align="center"
          >
            {subtitle.toUpperCase()}
          </Text>
        </div>
        {/* <img src={logo} alt="logo" className="logoCard" /> */}
      </S.Quadros>
    );
  };

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
            <img className="logo" src={logoBlack} alt="logomarca" />

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
                    size={THEME.SIZES.mediumLarge}
                  />
                  <CustomTagA
                    title="SERVIÇOS"
                    section="servicos"
                    size={THEME.SIZES.mediumLarge}
                  />
                  <CustomTagA
                    title="QUEM SOMOS"
                    section=""
                    size={THEME.SIZES.mediumLarge}
                  />
                  <CustomTagA
                    title="CONTATO"
                    section=""
                    size={THEME.SIZES.mediumLarge}
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
                color={THEME.COLORS.white}
                bold
                align="center"
              >
                Advogados Especialistas em Licitações e Contratos
              </Text>
              <Text
                size={THEME.SIZES.large}
                color={THEME.COLORS.white}
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
                  size={THEME.SIZES.mediumLarge}
                  color={THEME.COLORS.white}
                />
                <Text
                  size={THEME.SIZES.mediumLarge}
                  color={THEME.COLORS.white}
                  align="center"
                >
                  Fale agora com o Especialista
                </Text>
              </S.ButtonBottomS1>
              <Text
                size={THEME.SIZES.mediumLarge}
                color={THEME.COLORS.white}
                align="center"
              >
                Atendimento Rápido, Seguro e Online
              </Text>
            </S.ContainerTitlesBottomS1>
          </S.BottomS1>
        </S.Section1>
      </S.Background>

      <S.Section2 id="servicos">
        <CustomCard
          title="Análise de edital e organização de documentos"
          subtitle="Analisamos o seu edital e organizamos todo o lastro documental para que você tenha êxito em certames licitatórios."
        />
        <CustomCard
          title="Assessoria durante o processo licitatório"
          subtitle="Realizamos todos os atos necessários para que sua empresa obtenha êxito na competição licitatória, proporcionando um atendimento especializado desde o ato cadastral até eventual interposição de recursos."
        />
        <CustomCard
          title="Assessoria em contratos administrativos"
          subtitle="Analisamos o contrato administrativo celebrado com o órgão contratante, propiciando todo um acompanhamento especializado durante a sua execução para que sejam garantidos aos nossos clientes todos os direitos pertinentes da relação contratual."
        />
        <CustomCard
          title="Defesa administrativa no âmbito licitatório"
          subtitle="Elaboramos peças defensivas contra sanções administrativas por meio do nosso competente corpo jurídico, garantindo aos nossos clientes uma defesa efetiva e que busque o respeito aos princípios que regem todo o processo administrativo."
        />
      </S.Section2>

      <S.Section4 id="contato">
        <Text
          size={THEME.SIZES.mediumLarge}
          color={THEME.COLORS.white}
          align="center"
          style={{ width: "40%" }}
        >
          NOS SIGA NAS REDES SOCIAIS
        </Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "40%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={instagram}
            alt="instagram"
            style={{ width: 40, height: 40 }}
          />
        </div>
      </S.Section4>
    </S.Screen>
  );
}

export default Home;
