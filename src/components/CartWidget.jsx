import React from 'react';
import { Link } from 'react-router-dom';
import './estilos/CartWidget.css';



const CartWidget = () => {
 
  return (
    <div className="cartWidget">   
   <Link to ="/cart">      
      
       <img src="../src/iconocarrito.png" alt="" className='carrito' />
    </Link>
    </div>
  );
};

export default CartWidget;