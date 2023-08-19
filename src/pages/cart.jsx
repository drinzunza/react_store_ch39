import "./cart.css";
import { useContext } from 'react';
import DataContext from '../store/dataContext';

function Cart() {
  const cart = useContext(DataContext).cart;

  return (
    <div className="cart page">
      <h1>Are you ready to get your product?</h1>
      <h5>You have {cart.length} products in the backet</h5>
    </div>
  );
}

export default Cart;