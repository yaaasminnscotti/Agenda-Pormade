import { useState } from "react";
import styled from "styled-components";
import { FundoBarra, FundoImgeTextos, ImgeTexto, LogoPormade, PormadeAgenda, TituloContainer } from "../../components/Barra";
import Fundo from "../../components/Fundo";
import Logo from "../../assets/images/folha.svg";
import Nav from "../../components/Nav";
import ConteudoExpandido from "../../components/ConteudoExpandido";

const PaginaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const FundoContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const ContainerPrincipal = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  z-index: 1;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
`;

const PaginaInicial = () => {
  const [ativo, setAtivo] = useState("listar");

  return (
    <PaginaWrapper>
      <FundoContainer>
        <Fundo />
      </FundoContainer>

      <ContainerPrincipal>
        <FundoBarra $JustifyContent="flex-start">
          <FundoImgeTextos>
            <ImgeTexto>
              <LogoPormade src={Logo} alt="logo" />
              <TituloContainer>
                <PormadeAgenda>Pormade</PormadeAgenda>
                <PormadeAgenda $fontWeight="400">Agenda</PormadeAgenda>
              </TituloContainer>
            </ImgeTexto>
          </FundoImgeTextos>

          {/* 🔹 Agora o Nav recebe o estado do pai */}
          <Nav ativo={ativo} setAtivo={setAtivo} />
        </FundoBarra>

        {/* 🔹 E o ConteudoExpandido usa o mesmo estado */}
        <ConteudoExpandido ativo={ativo} />
      </ContainerPrincipal>
    </PaginaWrapper>
  );
};

export default PaginaInicial;
