import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import logo from './logo.png';
import tenisStreetImage from './tenisStreetImage/tenis-street.jpg'; 
import CamisetaCapangaTriadShui from './tenisStreetImage/CamisetaCapangaTriadShui.png';
import CamisetaApproveBigBear from './tenisStreetImage/ApproveBoldBigBear.png';
import NikeSbDunkLowBig from './tenisStreetImage/Nike SB DunkLowBigMoneySavings.png';
import MoletomAntiSocialSocialClub from './tenisStreetImage/MoletomAntiSocialSocialClubXGrandTurismoFlag.png';
import BoneAntiSocial from './tenisStreetImage/Bone.png';
import Baw from './tenisStreetImage/Baw.png';
import Supreme from './tenisStreetImage/Supreme.png';
import Bolsa from './tenisStreetImage/Bolsa.png';
import Polo from './tenisStreetImage/Polo.png'
// Importe as imagens dos produtos
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
    { id: 1, category: 'StreetWalk', title: 'Tênis Street', price: 'R$ 14.099,99', stars: 4, views: 150000, image: tenisStreetImage },
    { id: 2, category: 'StreetWalk', title: 'Camiseta CapangaTriad Shui', price: 'R$ 699,99', stars: 5, views: 2000, image: CamisetaCapangaTriadShui },
    { id: 3, category: 'StreetWalk', title: 'Camiseta Approve Big Bear', price: 'R$ 199,90', stars: 5, views: 5000, image: CamisetaApproveBigBear},
    { id: 4, category: 'StreetWalk', title: 'Nike SB Dunk Low Big Money Savings', price: 'R$ 1.159,99', stars: 4.8, views: 1200, image: NikeSbDunkLowBig },
    { id: 5, category: 'StreetWalk', title: 'Moletom Anti Social Social Club X Grand Turismo', price: 'R$ 1500,99', stars: 4, views: 9000, image: MoletomAntiSocialSocialClub },
    { id: 6, category: 'StreetWalk', title: 'BoneAnti Social Club X Grand Turismo ', price: 'R$ 645,99', stars: 5, views: 200, image: BoneAntiSocial },
    { id: 7, category: 'StreetWalk', title: 'Camiseta BAW Athletic', price: 'R$ 109,99', stars: 4.5, views: 25080, image: Baw},
    { id: 8, category: 'StreetWalk', title: 'Camiseta Street', price: 'R$ 5999,99', stars: 5, views: 45042, image: Supreme },
    { id: 9, category: 'StreetWalk', title: 'Carteira Ophidia Gucci', price: 'R$ 8399,99', stars: 4.3, views: 9820, image: Bolsa },
    { id: 10, category: 'StreetWalk', title: 'Moletom Lunar Polo Ralph Lauren', price: 'R$  1.713', stars: 4.7, views: 15426, image: Polo },
    // Adicione os outros produtos com seus respectivos caminhos para as imagens
    // Exemplo: { id: 3, category: 'StreetWalk', title: 'Calça Street', price: 'R$ 149,99', stars: 3, views: 120, image: calcaStreetImage },
  ];
  const renderHalfColorText = (text) => {
    return text.split('').map((letter, index) => (
      <span key={index}>{letter}</span>
    ));
  };
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
        <h2 className="tie-dye-text">{renderHalfColorText("StreetWear")}</h2>
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