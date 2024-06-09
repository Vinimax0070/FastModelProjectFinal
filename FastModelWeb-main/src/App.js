import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import CadEnd from './components/CadEnd';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        setTotal((prevTotal) => prevTotal + parseFloat(product.price.replace('R$', '').replace('.', '').replace(',', '.')));
    };

    const removeFromCart = (productId) => {
        const productToRemove = cart.find((product) => product.id === productId);
        if (productToRemove) {
            setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
            setTotal((prevTotal) => prevTotal - parseFloat(productToRemove.price.replace('R$', '').replace('.', '').replace(',', '.')));
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/CadEnd" element={<CadEnd />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Home" element={<Home addToCart={addToCart} cart={cart} total={total} />} />
                <Route path="/checkout" element={<Checkout cart={cart} total={total} />} />
            </Routes>
        </Router>
    );
}

export default App;
