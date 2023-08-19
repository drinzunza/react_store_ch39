import './product.css';
import QuantityPicker from './quantityPicker';
import { useContext, useEffect, useState } from 'react';
import DataContext from '../store/dataContext';

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(DataContext).addToCart;

  useEffect(function () {
    //when the [product] is loaded
  }, []);

  function handleQuantityChange(qty) {
    setQuantity(qty);
  }

  function handleAdd() {
    const prodWithQuantity = {
      ...props.data,
      quantity: quantity,
    };

    addToCart(prodWithQuantity); // call the global fn
  }

  function getPrice() {
    return props.data.price.toFixed(2);
  }

  function getTotal() {
    const total = props.data.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img src={'/images/' + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>{getPrice()}</label>
        <label>{getTotal()}</label>
      </div>
      <QuantityPicker onChange={handleQuantityChange} />
      <button onClick={handleAdd} className="btn btn-sm btn-success">
        Add
      </button>
    </div>
  );
}
export default Product;
