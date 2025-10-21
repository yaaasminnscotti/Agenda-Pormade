import React, { useState } from 'react';
import './login.css';
import Botao from '../Botao';


export default function LoginDiv() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Login:', login, 'Senha:', senha);
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Entrar</h2>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Botao />
        <p className="register-text">
          Não tem uma conta? <span>Crie uma</span>
        </p>
      </form>
    </div>
  );
}
