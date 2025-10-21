import styled from 'styled-components'
import Logo from '../../assets/images/folha.svg'
import './barra.css'

const FundoBarra= styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 20vw;
  background-image: linear-gradient(180deg, #1f1e1e, #000000);
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  text-align: center;
  color: #fff;
`

const FundoImgeTextos= styled.div`
display: flex;
flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 30px;

`

const ImgeTexto=styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
`

const Paragrafo= styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
  width: 70%;
  text-align: right;
`

const LogoPormade= styled.img`
  width: 100px;
  height: auto;
`

const PormadeAgenda=styled.h1`
    color: #fff;
    
  font-size: 36px;
  font-weight: ${({fontWeight})=> fontWeight || 700};
`


export default function Barra() {
  return (
    <FundoBarra>
      <FundoImgeTextos>
      <ImgeTexto>
        <LogoPormade src={Logo} alt="logo"></LogoPormade>
          <PormadeAgenda>Pormade<PormadeAgenda fontWeight="400">Agenda</PormadeAgenda></PormadeAgenda>
          </ImgeTexto>
          
        <Paragrafo>Organize seus contatos, mantenha seu calendário em dia e muito mais</Paragrafo>
</FundoImgeTextos>
    </FundoBarra>
  )
}


