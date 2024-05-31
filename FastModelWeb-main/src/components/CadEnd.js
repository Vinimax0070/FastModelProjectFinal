import React, { useState } from 'react';
import './CadEnd.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function CadEnd() {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const navigate = useNavigate();

    const handleAvancar = () => {
        // Lógica para validar os dados (opcional)
        // ...

        navigate('/cadastro'); // Redirecionar para a rota de cadastro
    };

    return (
        <div className="cadastro-container">
            <Link to="/" className="back-arrow"> &larr; </Link>

            <img src={logo} alt="Fast Model Logo" className="logo" />

            <form>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        value={nomeCompleto}
                        onChange={(e) => setNomeCompleto(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Seu email@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        placeholder="Data de Nascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirmar Senha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="button" onClick={handleAvancar} className="btn-login">
                    AVANÇAR
                </button>
            </form>
        </div>
    );
}

export default CadEnd;
