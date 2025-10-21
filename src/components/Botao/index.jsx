import styled from "styled-components"

const BotaoEnviar= styled.button`
font-size: 18px;
    border: none;
    border-radius: 10px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background: linear-gradient(to left, #14862d, #114223);
    transition: .5s;

    &:hover{
    transform: scale(1.1);
    cursor: pointer;

    }`

export default function Botao(){
    return(
    <BotaoEnviar> <a onClick={() => navigate("/cadastro")} style={{ cursor: "pointer" }}>
          Clique aqui
        </a></BotaoEnviar>
    )
}