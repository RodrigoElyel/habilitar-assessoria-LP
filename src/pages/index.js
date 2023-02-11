import React from "react";
import * as S from "./styles";
import Text from "../components/Text";
// import logo from "../assets/leadership.png";
import samuel from "../assets/samuel.jpeg";
import thalia from "../assets/thalia.jpeg";
import cleants from "../assets/cleants.jpeg";
import planos from "../assets/planos.png";
import logoBlack from "../assets/logoHAblack.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import tiktok from "../assets/tiktok.png";
import THEME from "../styles";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Home() {
  const CustomCardProfissionais = ({ title, subtitle, fullText, img }) => {
    return (
      <div className="ContainerCard">
        <img src={img} alt="imgProfissionais" className="imgProfissionais" />
        <Text
          className="titleCardProfissionais"
          size={THEME.SIZES.large}
          color={THEME.COLORS.white}
          align="center"
          bold
        >
          {title.toUpperCase()}
        </Text>

        <Text
          className="subTitleCardProfissionais"
          size={THEME.SIZES.medium}
          color={THEME.COLORS.primary}
          align="center"
        >
          {subtitle.toUpperCase()}
        </Text>

        <Text
          className="fullTextCardProfissionais"
          size={THEME.SIZES.medium}
          color={THEME.COLORS.white}
          align="center"
        >
          {fullText.toUpperCase()}
        </Text>
      </div>
    );
  };

  const CustomCard = ({ title, subtitle }) => {
    return (
      <S.Quadros>
        <div className="ContainerTitleCard">
          <Text
            className="titleCard"
            size={THEME.SIZES.large}
            color={THEME.COLORS.white}
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
              <CustomTagA title="PLANOS" section="planos" />
              <CustomTagA title="PROFISSIONAIS" section="profissionais" />
              <CustomTagA title="CONTATO" section="contato" />
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
                    title="PLANOS"
                    section="planos"
                    size={THEME.SIZES.mediumLarge}
                  />
                  <CustomTagA
                    title="PROFISSIONAIS"
                    section="profissionais"
                    size={THEME.SIZES.mediumLarge}
                  />
                  <CustomTagA
                    title="CONTATO"
                    section="contato"
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
                EQUIPE JURÍDICA COM EXPERIÊNCIA NA ÁREA DE LICITAÇÕES E
                CONTRATOS ADMNISTRATIVOS
              </Text>
              <Text
                size={THEME.SIZES.large}
                color={THEME.COLORS.white}
                align="center"
              >
                Fazemos com que pequenas, médias e grandes empresas forneçam
                seus serviços para o governo.
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
        <Popup
          trigger={
            <S.ButtonPopUp>
              <Text
                size={THEME.SIZES.mediumLarge}
                color={THEME.COLORS.white}
                align="center"
              >
                Outros serviços
              </Text>
            </S.ButtonPopUp>
          }
          contentStyle={{
            display: "flex",
            width: 400,
            height: 400,
            borderRadius: 25,
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            backgroundColor: THEME.COLORS.white,
          }}
          modal
          nested
        >
          <Text
            className="titleTop"
            size={THEME.SIZES.mediumLarge}
            color={THEME.COLORS.primary}
            bold
            align="center"
          >
            Você precisa de advogado?
          </Text>

          <Text
            className="titleTop"
            size={THEME.SIZES.mediumLarge}
            color={THEME.COLORS.primary}
            align="center"
          >
            Atuamos nas áreas:
          </Text>
          <Text
            className="titleTop"
            size={THEME.SIZES.mediumLarge}
            color={THEME.COLORS.primary}
            align="left"
          >
            {"▪️Trabalhista"}
          </Text>
          <Text
            className="titleTop"
            size={THEME.SIZES.mediumLarge}
            color={THEME.COLORS.primary}
            align="left"
          >
            {"▪️Previdenciária"}
          </Text>
          <Text
            className="titleTop"
            size={THEME.SIZES.mediumLarge}
            color={THEME.COLORS.primary}
            align="left"
          >
            {"▪️Tributária"}
          </Text>
          <Text
            className="titleTop"
            size={THEME.SIZES.mediumLarge}
            color={THEME.COLORS.primary}
            align="left"
          >
            {"▪️Criminal"}
          </Text>
          <Text
            className="titleTop"
            size={THEME.SIZES.mediumLarge}
            color={THEME.COLORS.primary}
            align="left"
          >
            {"▪️Cível"}
          </Text>
          <Text
            className="titleTop"
            size={THEME.SIZES.mediumLarge}
            color={THEME.COLORS.primary}
            bold
            align="center"
          >
            📞 Entre em contato com nosso corpo jurídico de advogados.
          </Text>
          <S.ButtonInsidePopUp
            onClick={() => {
              window.open("https://wa.me/5598983477748");
            }}
          >
            <Text
              size={THEME.SIZES.mediumLarge}
              color={THEME.COLORS.black}
              align="center"
            >
              Whatsapp
            </Text>
          </S.ButtonInsidePopUp>
        </Popup>
      </S.Section2>

      <S.Section3 id="planos">
        <Text
          className="titleTopPlanos"
          size={THEME.SIZES.extraLarge + 18}
          color={THEME.COLORS.primary}
          bold
          align="center"
        >
          Conheça os nossos planos
        </Text>
        <img className="imgPlanos" src={planos} alt="planos" />
      </S.Section3>

      <S.Section4 id="profissionais">
        <S.ContainerTitleSection04>
          <Text
            className="titleTopProfisionais"
            size={THEME.SIZES.extraLarge + 18}
            color={THEME.COLORS.primary}
            bold
            align="center"
          >
            Conheça os Especialistas
          </Text>
        </S.ContainerTitleSection04>

        <S.ContainerProfissionais>
          <CustomCardProfissionais
            title="Samuel Rodrigues"
            subtitle="Advogado pela OAB/PB"
            fullText="Bacharel em Direito pela Universidade Federal de Campina Grande - UFCG. Experiência na área de Assessoria e Consultoria em Licitações para empresas de Engenharia; Pós-graduando em Licitações e Contratos Administrativos; Experiência em processos trabalhistas e cíveis."
            img={samuel}
          />
          <CustomCardProfissionais
            title="Thalia Gomes"
            subtitle="Jornalista"
            fullText="Bacharel em Jornalismo pela Universidade Ceuma. Experiência no Setor Público, Assessoria Parlamentar e para prefeituras; Gestão de redes Sociais; Marketing Digital com experiência na área de publicidade; Experiência na TV e Rádio."
            img={thalia}
          />
          <CustomCardProfissionais
            title="Antônio Cleantes"
            subtitle="Advogado pela OAB/MA"
            fullText="Pós-graduando em Licitações e Contratos Administrativos. Experiência na área de Assessoria e Consultoria em Licitações e Contratos Administrativos; Atuação em processos criminais, previdenciários e cíveis."
            img={cleants}
          />
        </S.ContainerProfissionais>
      </S.Section4>

      <S.Section5 id="contato">
        <S.ContainerInfo>
          <Text size={THEME.SIZES.mediumLarge} color={THEME.COLORS.white}>
            {"Entre em contato"}
          </Text>

          <S.IconAndTitle>
            <BiPhoneCall size={THEME.SIZES.large} color={THEME.COLORS.white} />
            <Text
              size={THEME.SIZES.mediumLarge}
              color={THEME.COLORS.white}
              align="center"
            >
              {": (98) 9 8177-8773"}
            </Text>
          </S.IconAndTitle>

          <S.IconAndTitle>
            <HiOutlineMail
              size={THEME.SIZES.large}
              color={THEME.COLORS.white}
            />
            <Text
              size={THEME.SIZES.mediumLarge}
              color={THEME.COLORS.white}
              align="center"
            >
              {": contatohabilitar@gmail.com"}
            </Text>
          </S.IconAndTitle>
        </S.ContainerInfo>

        <S.ContainerSocial>
          <Text size={THEME.SIZES.mediumLarge} color={THEME.COLORS.white}>
            {"NOS SIGA NAS REDES SOCIAIS"}
          </Text>

          <S.IconAndTitle className="social">
            <img
              onClick={() => {
                window.open("https://www.instagram.com/habilitar_assessoria");
              }}
              src={instagram}
              alt="instagram"
              style={{ width: 40, height: 40 }}
            />
            <img
              onClick={() => {
                window.open("https://twitter.com/Habilitarlicita");
              }}
              src={twitter}
              alt="twitter"
              style={{ width: 40, height: 40 }}
            />
            <img
              onClick={() => {
                window.open(
                  "https://www.tiktok.com/@habilitar_assessoria?lang=pt-BR"
                );
              }}
              src={tiktok}
              alt="twitter"
              style={{
                width: 40,
                height: 40,
                border: "1px solid black",
                borderRadius: 50,
              }}
            />
          </S.IconAndTitle>
        </S.ContainerSocial>
      </S.Section5>
    </S.Screen>
  );
}

export default Home;
