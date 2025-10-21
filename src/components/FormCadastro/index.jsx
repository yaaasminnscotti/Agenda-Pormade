import React, { useState } from 'react';
import './cadastro.css';

export default function CadastroDiv  (){
const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Dados do cadastro:', { nome, email, telefone, senha });

    // Aqui vai ser enviado para o backend com fetch/axios/cors
  };
return(
<form className="form-cadastro" onSubmit={handleSubmit}>
      <h2>Cadastro</h2>

      <label>Nome:</label>
      <input 
        type="text" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
        required 
        autoComplete='off'
      />

      <label>Email:</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
        autoComplete='off'

      />

      <label>Telefone:</label>
      <input 
        type="tel" 
        value={telefone} 
        onChange={(e) => setTelefone(e.target.value)} 
        required
        autoComplete='off'
 
      />

      <label>Senha:</label>
      <input 
        type="password" 
        value={senha} 
        onChange={(e) => setSenha(e.target.value)} 
        required 
        autoComplete='off'
      />

      <button type="submit">Cadastrar</button>
    </form>
  );

}
