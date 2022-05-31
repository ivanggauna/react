import React from 'react';
import { Link } from 'react-router-dom';
import { UseCartContext } from "../context/CartContext"
import './estilos/CartWidget.css';



const CartWidget = () => {
  const { totalItems } = UseCartContext();

  return (
    <div className="cartWidget">
      <Link to="/cart">
        <div className='cartWidget' style={{ opacity: !totalItems ? '0.5' : '1' }}>

          <span className="cartWidget__counter">{totalItems}</span>
        </div>
        <img src="../src/iconocarrito.png" alt="" className='carrito' />
      </Link>
    </div>
  );
};

export default CartWidget;