import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import CadEnd from './components/CadEnd'; // Importe o componente Cadastro
import Cadastro from './components/Cadastro'; // Importe o primeiro componente de cadastro
import Home from './components/Home';
import DropdownMenu from './components/DropdownMenu';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/CadEnd" element={<CadEnd />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Home" element={<Home />} />
                
            </Routes>
        </Router>
    );
}

export default App;
