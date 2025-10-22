import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const BotaoEnviar= styled.button`
    font-size: 20px;
    border: none;
    border-radius: 20px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    background: linear-gradient(to left, #14862d, #114223);
     transition: 0.3s ease;

  &:hover {
    box-shadow: 0 0 7px #acca96; 
    transform: scale(1.05);   
  }
`;
export default function Botao() {
  const navigate = useNavigate();

<<<<<<< HEAD
  return (
    <BotaoEnviar onClick={() => navigate("/cadastro")}>
      Clique aqui
    </BotaoEnviar>
  );
}
  
=======
    return(
    <BotaoEnviar>
        <a onClick={() => navigate("/paginainicial")} style={{ cursor: "pointer" }}>
          Acessar
        </a>
    </BotaoEnviar> 
    )
}
>>>>>>> 774ca6f0142d42368910e7bc0ee03bb9bbf15bc8
