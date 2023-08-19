import { createContext } from 'react';

/**
 * is a promise, interface, description, blue print of the data
 * it should not have any implementations
 */
const DataContext = createContext({
  cart: [],
  user: {},
  addToCart: () => {},
  removeFromCart: () => {},
});

export default DataContext;
