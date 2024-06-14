import React, { useState } from 'react';
import './Login.css';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function loginUser(username, password) {
        const url = `https://b2e0-170-254-23-7.ngrok-free.app/api/Usuario/Login/${username}/${password}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            return result;

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return false;
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        const result = await loginUser(username, password);
        if (result) {
            navigate('/home');
        } else {
            setError('Falha no login. Usuário ou senha inválido.');
        }
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Fast Model Logo" className="logo" />

            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="seuemail@mail.com"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="senha"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-login">Entrar</button>
                <Link to="/cadend" className="btn-login">
                    Cadastre-se
                </Link>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <a href="#" className="forgot-password">Esqueci Minha Senha</a>
        </div>
    );
}

export default Login;
