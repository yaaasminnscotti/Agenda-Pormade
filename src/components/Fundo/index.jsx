import styled from "styled-components";
import fundoImg from "../../assets/images/img-login.jpg"; // 👈 importa a imagem
import Barra from "../Barra";
import LoginDiv from "../FormLogin";

export const FundoFundo = styled.div`
  background-image: url(${fundoImg}); /* usa a variável importada */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
`;

const EspacoBarraForm=styled.div`
   display: flex;
  flex-direction: row; 
  justify-content: space-between; /* separa nas extremidades */
  gap: 500px; 
  padding: 0 42%; /* margem interna opcional */
`

export default function Fundo() {
  return (
    <FundoFundo>
        <EspacoBarraForm>
            <Barra />
            <LoginDiv />
      </EspacoBarraForm>
    </FundoFundo>
  );
}
