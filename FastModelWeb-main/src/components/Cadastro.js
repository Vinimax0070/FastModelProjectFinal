import React, { useState, useRef } from 'react';
import './CadEnd.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [erro, setErro] = useState('');

    const numeroRef = useRef(null);
    const navigate = useNavigate();

    const handleFinalizar = () => {
        navigate('/'); // Navega para a rota principal ('/') que é o seu Login
    };

    const preencherEndereco = async () => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                setErro('CEP não encontrado.');
            } else {
                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setErro('');

                // Move o foco para o campo número
                if (numeroRef.current) {
                    numeroRef.current.focus();
                }
            }
        } catch (error) {
            setErro('Erro ao consultar o CEP.');
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
                        placeholder="CEP*"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        onBlur={preencherEndereco}  // Chama a função ao perder o foco
                        required
                    />
                </div>

                {erro && <p className="erro">{erro}</p>}

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Rua*"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Numero*"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        ref={numeroRef}  // Ref para o campo número
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Bairro*"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Cidade*"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        required
                    />
                </div>

                <button type="button" onClick={handleFinalizar} className="btn-login">
                    FINALIZAR
                </button>
            </form>
        </div>
    );
}

export default Cadastro;
