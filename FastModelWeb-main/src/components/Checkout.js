import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Checkout.css';

const Checkout = ({ cart, total }) => {
  const [cardType, setCardType] = useState('credit');
  const [expiryDate, setExpiryDate] = useState(null);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (coupon === 'DESCONTO10') {
      setDiscount(0.1); // 10% de desconto
    } else {
      setDiscount(0);
      alert('Cupom inválido');
    }
  };

  const calculateTotalWithDiscount = () => {
    return (total * (1 - discount)).toFixed(2);
  };

  return (
    <div className="checkout-container">
      <h2>Finalização da Compra</h2>
      <form className="checkout-form">
        <div className="form-group">
          <label htmlFor="cardType">Tipo de Cartão:</label>
          <select
            id="cardType"
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
          >
            <option value="credit">Cartão de Crédito</option>
            <option value="debit">Cartão de Débito</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Número do Cartão:</label>
          <input type="text" id="cardNumber" placeholder="Número do Cartão" />
        </div>

        <div className="form-group">
          <label htmlFor="cardExpiry">Data de Vencimento:</label>
          <DatePicker
            id="cardExpiry"
            selected={expiryDate}
            onChange={(date) => setExpiryDate(date)}
            dateFormat="MM/yy"
            showMonthYearPicker
            placeholderText="MM/AA"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardCVV">CVV:</label>
          <input type="text" id="cardCVV" placeholder="CVV" />
        </div>

        <div className="form-group">
          <label htmlFor="cardHolder">Nome do Titular:</label>
          <input type="text" id="cardHolder" placeholder="Nome do Titular" />
        </div>

        <button type="submit" className="checkout-button">Finalizar Compra</button>
      </form>

      <div className="cart-summary">
        <h3>Itens Selecionados</h3>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.title} - {product.price}
            </li>
          ))}
        </ul>
        <h4>Total: R$ {total.toFixed(2)}</h4>

        <div className="form-group">
          <label htmlFor="coupon">Cupom de Desconto:</label>
          <input
            type="text"
            id="coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Insira seu cupom"
          />
          <button onClick={handleApplyCoupon} className="apply-coupon-button">Aplicar Cupom</button>
        </div>

        {discount > 0 && (
          <h4>Total com Desconto: R$ {calculateTotalWithDiscount()}</h4>
        )}
          
      </div>
    </div>
    
  );
  
};

export default Checkout;
