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
    const [modifiedProducts, setModifiedProducts] = useState([]);

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

    async function fetchProducts() {
        const url = 'https:localhost:7270/api/Produto/Listar';

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return [];
        }
    }
    
    async function carregarProduto() {
        const data = await fetchProducts();
        const newProducts = data.map(item => ({
            id: item.id_Produto,
            category: 'StreetWalk',
            title: item.nome,
            price: `R$ ${item.preco.toFixed(2).replace('.', ',')}`,
            stars: item.rating,
            views: item.cont_Reviews,
            image: item.img_Url,
        }));
        setModifiedProducts(newProducts);
    }

    const showStreetWear1 = async () => {
        await carregarProduto();
      setVisibleSection(visibleSection === 'streetwear1' ? null : 'streetwear1');
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

    useEffect(() => {
        showStreetWear1();
    }, []);
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
        <p className='estilo'>Aqui você encontrará os melhores produtos!</p>

              <div className="products">
                  {modifiedProducts.map((product, index) => (
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

      </main>
    </div>
  );
};

export default Home;
