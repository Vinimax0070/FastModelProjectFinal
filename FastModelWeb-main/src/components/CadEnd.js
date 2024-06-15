import React, { useState } from 'react';
import './CadEnd.css';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';

function CadEnd() {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const navigate = useNavigate();

    async function adicionarUsuario(usuario) {
        const url = 'https:localhost:7270/api/Usuario/AdicionarUsuario';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            return result;

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return null;
        }
    }

    const handleAvancar = async () => {
        // Validação opcional dos dados
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem.');
            return;
        }

        const nomeSplit = nomeCompleto.trim().split(' ');
        const nome = nomeSplit[0];
        const sobreNome = nomeSplit.slice(1).join(' ');

        const usuario = {
            nome: nome,
            sobreNome: sobreNome,
            email: email,
            data_Nascimento: new Date(dataNascimento).toISOString(),
            senha: senha
        };

        const result = await adicionarUsuario(usuario);
        

        if (result && result.id_Usuario) {
            navigate(`/Cadastro?id_usuario=${result.id_Usuario}`);
        } else {
            alert('Erro ao cadastrar usuário.');
        }
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
