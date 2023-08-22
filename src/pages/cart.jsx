import './cart.css';
import { useContext } from 'react';
import DataContext from '../store/dataContext';
import ProductInCart from '../components/productInCart';

function Cart() {
  const cart = useContext(DataContext).cart;

  function getTotalCount() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }

    return total;
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      total += prod.quantity * prod.price;
    }

    return total.toFixed(2);
  }

  return (
    <div className="cart page">
      <h1>Are you ready to get your product?</h1>
      <h5>You have {getTotalCount()} products in the backet</h5>

      <div className="parent">
        <div className="list">
          {cart.map((prod) => (
            <ProductInCart key={prod.id} data={prod} />
          ))}
        </div>

        <div className="side-menu">
          <h3>Total</h3>
          <h3>{getTotal()}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
