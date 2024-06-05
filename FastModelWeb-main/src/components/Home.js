import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import logo from './logo.png';
import tenisStreetImage from './tenisStreetImage/tenis-street.jpg'; // Importe as imagens dos produtos
//import camisetaStreetImage from './camiseta-street.jpg';
// Importe as outras imagens dos produtos...

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const menuRef = useRef(null);
  const settingsRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (settingsOpen) setSettingsOpen(false);
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
    if (menuOpen) setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setSettingsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const products = [
    { id: 1, category: 'StreetWalk', title: 'Tênis Street', price: 'R$ 199,99', stars: 4, views: 150, image: tenisStreetImage },
    { id: 2, category: 'StreetWalk', title: 'Camiseta Street', price: 'R$ 99,99', stars: 5, views: 200,  },
    // Adicione os outros produtos com seus respectivos caminhos para as imagens
    // Exemplo: { id: 3, category: 'StreetWalk', title: 'Calça Street', price: 'R$ 149,99', stars: 3, views: 120, image: calcaStreetImage },
  ];

  return (
    <div className="home">
      <header className="header">
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="actions">
          <div className="icon">🛒</div>
          <div className="icon" onClick={toggleSettings}>👤</div>
        </div>
      </header>
      {menuOpen && (
        <nav className="dropdown-menu" ref={menuRef}>
          <ul>
            <li>Opção 1</li>
            <li>Opção 2</li>
            <li>Opção 3</li>
          </ul>
        </nav>
      )}
      {settingsOpen && (
        <nav className="dropdown-settings" ref={settingsRef}>
          <ul>
            <li>Perfil</li>
            <li>Meus pedidos</li>
            <li>Formas de pagamento</li>
            <li>Help center</li>
            
          </ul>
        </nav>
      )}
      <main className="content">
        <h2>Bem-vindo à FastModel</h2>
        <p>Aqui você encontrará os melhores produtos!</p>
        <h2>StreetWear</h2>
        <div className="products">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>⭐ {product.stars} estrelas</p>
              <p>👁️ {product.views} views</p>
              <button>Adicionar ao carrinho</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;