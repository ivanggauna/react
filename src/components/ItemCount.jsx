import React from "react";
import { useState } from "react";
import "./styles/itemCount.css";

/* La funcion tiene que tener stock, initial,  onAdd  */
const ItemCount = ({ initial, stock, onAdd, product, handleInputType }) => {
  /* Hook */
  const [quantity, setQuantity] = useState(initial);

  /* Funcion que usa el hook y recibe valor por parametro */
  const addProduct = (value) => {
    setQuantity(quantity + value);
  };

  function addToCart() {
    onAdd(quantity, product.name);
    handleInputType();
  }

  return (
    <div className="itemCountContainer">
      <div className="itemCountContainer__general">
        <button
          className="itemCountContainer__button"
          onClick={() => addProduct(-1)}
          disabled={quantity === initial ? true : false}
        >
          -
        </button>
        <span className="itemCountContainer__quantity">{quantity}</span>
        <button
          className="itemCountContainer__button"
          onClick={() => addProduct(+1)}
          disabled={quantity === stock ? true : false}
        >
          +
        </button>
      </div>

      <button
        className="addButton"
        onClick={() => addToCart(quantity)}
        disabled={stock === 0 ? true : false}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
