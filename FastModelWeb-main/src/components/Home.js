import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from './logo.png';
import CamisetaCapangaTriadShui from './tenisStreetImage/CamisetaCapangaTriadShui.png';
import CamisetaApproveBigBear from './tenisStreetImage/ApproveBoldBigBear.png';
import NikeSbDunkLowBig from './tenisStreetImage/Nike SB DunkLowBigMoneySavings.png';
import MoletomAntiSocialSocialClub from './tenisStreetImage/MoletomAntiSocialSocialClubXGrandTurismoFlag.png';
import BoneAntiSocial from './tenisStreetImage/Bone.png';
import Baw from './tenisStreetImage/Baw.png';
import Supreme from './tenisStreetImage/Supreme.png';
import Bolsa from './tenisStreetImage/Bolsa.png';
import Polo from './tenisStreetImage/Polo.png';
import Adidas from './tenisStreetImage/AdidasCampus.png';
import streetwear from './tenisStreetImage/streetWearImage.png';
import streetwear3 from './tenisStreetImage/streetWearImage3.png';
import streetwear2 from './tenisStreetImage/streetWearImage2.png';
import zaraa1 from './tenisStreetImage/zara1.png';
import zaraa2 from './tenisStreetImage/zara2.png';
import zaraa3 from './tenisStreetImage/zara3.png';
import zaraa4 from './tenisStreetImage/zara4.png';
import zaraa5 from './tenisStreetImage/zara5.png';
import ralph from './tenisStreetImage/RL.png';
import ralph2 from './tenisStreetImage/RL2.png';
import ralph3 from './tenisStreetImage/RL3.png';
import ralph4 from './tenisStreetImage/RL4.png';
import ralph5 from './tenisStreetImage/RL5.png';

const Home = ({ addToCart, removeFromCart, cart, total, setTotal }) => {
  // Seu código aqui
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState(null);

  const menuRef = useRef(null);
  const settingsRef = useRef(null);
  const cartRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (settingsOpen) setSettingsOpen(false);
    if (cartOpen) setCartOpen(false);
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
    if (menuOpen) setMenuOpen(false);
    if (cartOpen) setCartOpen(false);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    if (menuOpen) setMenuOpen(false);
    if (settingsOpen) setSettingsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setSettingsOpen(false);
    }
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const products = [
    { id: 1, category: 'StreetWalk', title: 'Adidas Campus 00s', price: 'R$ 699,99', stars: 4, views: 150000, image: Adidas },
    { id: 2, category: 'StreetWalk', title: 'Camiseta CapangaTriad Shui', price: 'R$ 699,99', stars: 5, views: 2000, image: CamisetaCapangaTriadShui },
    { id: 3, category: 'StreetWalk', title: 'Camiseta Approve Big Bear', price: 'R$ 199,90', stars: 5, views: 5000, image: CamisetaApproveBigBear },
    { id: 4, category: 'StreetWalk', title: 'Nike SB Dunk Low Big Money Savings', price: 'R$ 1.159,99', stars: 4.8, views: 1200, image: NikeSbDunkLowBig },
    { id: 5, category: 'StreetWalk', title: 'Moletom Anti Social Social Club X Grand Turismo', price: 'R$ 1500,99', stars: 4, views: 9000, image: MoletomAntiSocialSocialClub },
    { id: 6, category: 'StreetWalk', title: 'Bone Anti Social Club X Grand Turismo', price: 'R$ 645,99', stars: 5, views: 200, image: BoneAntiSocial },
    { id: 7, category: 'StreetWalk', title: 'Camiseta BAW Athletic', price: 'R$ 109,99', stars: 4.5, views: 25080, image: Baw },
    { id: 8, category: 'StreetWalk', title: 'Camiseta Street', price: 'R$ 5999,99', stars: 5, views: 45042, image: Supreme },
    { id: 9, category: 'StreetWalk', title: 'Carteira Ophidia Gucci', price: 'R$ 8399,99', stars: 4.3, views: 9820, image: Bolsa },
    { id: 10, category: 'StreetWalk', title: 'Moletom Lunar Polo Ralph Lauren', price: 'R$ 1.713', stars: 4.7, views: 15426, image: Polo },
  ];

  const products2 = [
    { id: 1, category: 'Casual', title: 'Sapato Com Volume Contraste', price: 'R$ 399,00', stars: 4.5, views: 11318, image: zaraa1 },
    { id: 2, category: 'Casual', title: 'Camisa Básica Masculina Manga Longa Slim Em Linho', price: 'R$ 220,00', stars: 3.7, views: 4421, image: zaraa2 },
    { id: 3, category: 'Casual', title: 'Camiseta Manga Longa Em Sarja Com Costura Contrastante ', price: 'R$ 399,90', stars: 5, views: 5457, image: zaraa3 },
    { id: 4, category: 'Casual', title: 'Camisa de linho ', price: 'R$740,99 ', stars: 4.8, views: 1256, image: zaraa4 },
    { id: 5, category: 'Casual', title: 'Calça de Sarja ', price: 'R$ 399,99', stars: 4, views: 9034, image: zaraa5 },
  ];

  const products3 = [
    { id: 1, category: 'Casual', title: 'Polo Soft Silk-Linen Suit Jacket', price: 'R$ 6.490,00', stars: 4.9, views: 31318, image: ralph },
    { id: 2, category: 'Casual', title: 'Hemp Twill Suit Trouser', price: 'R$ 1.620,00', stars: 4.7, views: 7921, image: ralph2 },
    { id: 3, category: 'Casual', title: 'The RL67 Linen Twill Jacket ', price: 'R$ 7.799,90', stars: 5, views: 35457, image: ralph3 },
    { id: 4, category: 'Casual', title: 'Linen-Blend-Twill Cropped Trousers ', price: 'R$1.210,00 ', stars: 4.9, views: 91256, image: ralph4 },
    { id: 5, category: 'Casual', title: 'Two-Tone Ruffle-Trim Polo Jumper ', price: 'R$ 820,00', stars: 4.4, views: 69034, image: ralph5 },
  ];

  const showStreetWear1 = () => {
    setVisibleSection(visibleSection === 'streetwear1' ? null : 'streetwear1');
  };

  const showStreetWear2 = () => {
    setVisibleSection(visibleSection === 'streetwear2' ? null : 'streetwear2');
  };

  const showStreetWear3 = () => {
    setVisibleSection(visibleSection === 'streetwear3' ? null : 'streetwear3');
  };

  const finalizePurchase = () => {
    navigate('/checkout');
  };

 

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    removeFromCart(productId);

    // Verifica se o carrinho está vazio e redefine o total como zero, se necessário
    if (updatedCart.length === 0) {
        setTotal(0);
    }
};


  return (
    <div className="home">
      <header className="header">
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="actions">
          <div className="icon" onClick={toggleCart}>🛒</div>
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
      {cartOpen && (
        <div className="cart-dropdown" ref={cartRef}>
          <h3>Carrinho de Compras</h3>
          {cart.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            <ul>
              {cart.map((product, index) => (
                <li key={index}>
                  {product.title} - {product.price}
                  <button onClick={() => handleRemoveFromCart(product.id)} className="addToCart">Remover</button>

                </li>
              ))}
            </ul>
          )}
          <h4>Total: R$ {total.toFixed(2)}</h4>
          <button onClick={finalizePurchase} className="checkout-button">Finalizar Compra</button>
        </div>
      )}
      <main className="content">
        <h2>Bem-vindo à FastModel</h2>
        <p>Aqui você encontrará os melhores produtos!</p>
        <p className='estilo'>Clique no seu estilo e descubra o que mais está em alta!</p>
        <div className="streetwear-container" onClick={showStreetWear1}>
          <img src={streetwear} alt="StreetWear" className="streetwear-image" />
        </div>
        {visibleSection === 'streetwear1' && (
          <div className="products">
            {products.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.image} alt={product.title} className="product-image" />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>⭐ {product.stars} estrelas</p>
                <p>👁️ {product.views} views</p>
                <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>
        )}
        <div className="streetwear-container" onClick={showStreetWear2}>
          <img src={streetwear2} alt="StreetWear" className="streetwear-image" />
        </div>
        {visibleSection === 'streetwear2' && (
          <div className="products">
            {products2.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.image} alt={product.title} className="product-image" />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>⭐ {product.stars} estrelas</p>
                <p>👁️ {product.views} views </p>
                <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>
        )}
        <div className="streetwear-container" onClick={showStreetWear3}>
          <img src={streetwear3} alt="StreetWear" className="streetwear-image" />
        </div>
        {visibleSection === 'streetwear3' && (
          <div className="products">
            {products3.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.image} alt={product.title} className="product-image" />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>⭐ {product.stars} estrelas</p>
                <p>👁️ {product.views} views </p>
                <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
