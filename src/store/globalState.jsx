import { useState } from 'react';
import DataContext from './dataContext';

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: 'Sergio', id: 123, email: 'sinzunza@sdgku.edu' });

  function addToCart(prod) {
    let copy = [...cart];

    let found = false;
    // check if the product is already in cart
    for (let i = 0; i < copy.length; i++) {
      let prodInCart = copy[i];
      if (prod.id === prodInCart.id) {
        // already there
        prodInCart.quantity += prod.quantity;
        found = true;
      }
    }

    // add prod to cart
    if (!found) {
      copy.push(prod);
    }

    setCart(copy);
  }

  function removeFromCart() {
    console.log('global remove');
  }

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalState;
