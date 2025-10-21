import Barra from "../../components/Barra";
import {FundoFundo} from "../../components/Fundo";
import './Cadastro.css'
import { Container, EspacoBarraForm} from  '../Login'
import CadastroDiv from "../../components/FormCadastro";

export default function Cadastro(){
    return(
    <Container>
        <FundoFundo/>
            <EspacoBarraForm>
                <Barra />
                <CadastroDiv/>
            </EspacoBarraForm>
    </Container>
    )
}
