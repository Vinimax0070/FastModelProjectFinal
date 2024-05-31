import React, { useState } from 'react';
import logo from './logo.png';

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const product = {
        name: 'Boboja Vermelho',
        price: 'R$ 1070,50',
        rating: 4.5,
        reviews: 245,
        image: '', // Substitua pelo caminho real da sua imagem
    };

    return (
        <div className="container">
            {/* Header */}
            <header>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
                <img src={logo} alt="Fast Model Logo" className="logo" />
                <button>🛒</button>
            </header>

            {/* Side Menu (visível apenas quando isMenuOpen for true) */}
            {isMenuOpen && (
                <div className="side-menu">
                    {/* Adicione suas opções de menu aqui */}
                </div>
            )}

            {/* Conteúdo Principal */}
            <main>
                <div className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p className="price">{product.price}</p>
                    <div className="rating">
                        {product.rating} estrelas ({product.reviews} reviews)
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
