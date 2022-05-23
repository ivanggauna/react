
import { useState } from "react";
import { UseCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Buttons from "./Buttons";


const ItemDetail = ({ product }) => {
    const [inputType, setInputType] = useState('itemCount');
    const {addToCart} = UseCartContext();

    function onAdd(quantity) {
        addToCart({...product, quantity})
    }
    
    function handleInputType() {
        setInputType('Buttons');
    }

    return (
        <div className="row">            
            <div className="col">
                <img src={product.image} alt="" />
            </div>
      
            <div className="col">
                <h2>{product.categoria}</h2>
                <h2>{product.name}</h2>
                <p>{product.price}</p>   
                {inputType === 'itemCount' ?
                    <ItemCount product={product} initial={1} stock={product.stock} onAdd={onAdd} handleInputType={handleInputType}/>:
                    <Buttons/>}           
               
            </div>
        </div>
       
    )
};

export default ItemDetail