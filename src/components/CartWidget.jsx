import React from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";
import images from "../images/images";


const CartWidget = () => {
  const { totalItems } = UseCartContext();

  return (
    <div className="cartWidget1">
      <Link to="/cart">
        <div className="cartWidget2">
          <span className="cartWidget__counter">{totalItems}</span>
        </div>
        <img src={images.iconocarrito} alt="" className="carrito" />
      </Link>
    </div>
  );
};

export default CartWidget;
