import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";
//create a hook that shows up when the page is 
//loaded
function Product(props){

    useEffect(function(){
        //when the [product] is loaded 
        console.log("hello im a product");
    },[]);

return (
    <div className="product">

        <img src={"/images/"+ props.data.image } alt=""></img>
        <h5>{props.data.title}</h5>
        <div className="prices">
            <label>{props.data.price}</label>
            <label>Total</label>
        </div>
        <QuantityPicker/>
    </div>
);
}
export default Product;