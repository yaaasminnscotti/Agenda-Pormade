import React, { useState } from 'react';
import styled from 'styled-components';
import {GuardaForm, FundoForm, Inputs} from '../FormLogin' 
import Botao from '../Botao';


const H2Cadastro=styled.h2`
  color: #fff;
  margin-top: auto;
  font-size: 40px;
  margin-bottom: 0;
`

export default function CadastroDiv  (){
const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Dados do cadastro:', { nome, email, telefone, senha });

  };
return(
<GuardaForm>
<FundoForm $height="60%" $Gap="45px">
  
      <H2Cadastro>Cadastro</H2Cadastro>

      <Inputs 
        type="text" 
        value={nome} 
        placeholder='Nome'
        onChange={(e) => setNome(e.target.value)} 
        required 
        autoComplete='off'
      />

      <Inputs 
        type="email" 
        value={email} 
        placeholder='E-mail'
        onChange={(e) => setEmail(e.target.value)} 
        required 
        autoComplete='off'

      />

      <Inputs 
        type="tel" 
        value={telefone} 
        placeholder='Telefone'
        onChange={(e) => setTelefone(e.target.value)} 
        required
        autoComplete='off'
      />

      <Inputs 
        type="password" 
        value={senha} 
        placeholder='Senha'
        onChange={(e) => setSenha(e.target.value)} 
        required 
        autoComplete='off'
      />

      <Botao />
    </FundoForm>
    </GuardaForm>
  );

}
