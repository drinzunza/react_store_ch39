import { useState } from 'react';
import DataContext from './dataContext';

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: 'Sergio', id: 123, email: 'sinzunza@sdgku.edu' });

  function addToCart(prod) {
    // add prod to cart
    let copy = [...cart];
    copy.push(prod);
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
