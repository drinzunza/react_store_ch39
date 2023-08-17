import Product from '../components/product';
import './catalog.css';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [prodsToDisplay, setProdsToDisplay] = useState([]);

  useEffect(function () {
    // exec something when the component is loaded
    console.log('the component is loaded');
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);

    let cats = ['fruits', 'vegetables', 'groceries', 'merchandise'];
    setCategories(cats);
    setProdsToDisplay(prods);
  }

  function filter(caty) {
    console.log(caty);

    let list = [];
    //find the products that match the category
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === caty) {
        list.push(prod);
      }
    }
    console.log(list);
    setProdsToDisplay(list);
  }

  function clearFilter() {
    setProdsToDisplay(products);
  }

  return (
    <div className="catalog page">
      <h1>Check out our {products.length} amazing products in our catalog</h1>
      <br />

      <button
        onClick={clearFilter}
        className="
           btn btn-sm btn-dark btn-filter"
      >
        All
      </button>

      {categories.map((category) => (
        <button key={category} onClick={() => filter(category)} className="btn btn-sm btn-primary btn-filter">
          {category}
        </button>
      ))}

      <br />
      {prodsToDisplay.map((p) => (
        <Product key={p.id} data={p}></Product>
      ))}
    </div>
  );
}

export default Catalog;
