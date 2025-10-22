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
  const [cargo, setCargo] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault(); 
    const novoUsuario={ nome, email, cargo,  senha};


      try {
    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoUsuario)
    });

    if (response.ok) {
      alert('Usuário cadastrado com sucesso!');
      setNome('');
      setEmail('');
      setCargo('');
      setSenha('');
    } else {
      const erro = await response.json();
      alert('Erro ao cadastrar: ' + erro.message);
    }
  } catch (error) {
    console.error('Erro de conexão:', error);
    alert('Erro ao conectar ao servidor.');
  }
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
        type="text" 
        value={cargo} 
        placeholder='Cargo'
        onChange={(e) => setCargo(e.target.value)} 
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

   <Botao
  onClick={handleSubmit}  
  redirectTo="/"   
>
  Cadastrar
</Botao>

    </FundoForm>
    </GuardaForm>
  );

}
