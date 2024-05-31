import React from 'react';
import { Link } from 'react-router-dom'; // Adicione esta linha
import './Login.css';
import logo from './logo.png';

function Login() {
  return (
    <div className="login-container">
      <img src= {logo} alt="Fast Model Logo" className="logo" />
        
      <form>
        
        <div className="form-group">
          <input type="email" placeholder="seuemail@mail.com" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="senha" required />
        </div>
              <Link to="/home" className="btn-login"> {/* Use Link para o botão */}
                  ENTRAR
              </Link>
              <Link to="/cadend" className="btn-login">
                  Cadastre-se
              </Link>
      </form>
      <a href="#" className="forgot-password">Esqueci Minha Senha</a>
    </div>
  );
}

export default Login;
