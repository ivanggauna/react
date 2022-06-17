import React from "react";
import { Link } from "react-router-dom";

import './styles/CartWidget.css'

export default function CartWidget() {


  return (
    <Link to="/cart">
      <div className="cartWidget">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tiendagundam-3f910.appspot.com/o/iconocarrito.png?alt=media&token=8dd2699c-fdc1-4ce1-b083-e15abc220edd"
          alt=""
          className="carrito"
        />
        <span className="cartWidget__counter"></span>
      </div>
    </Link>
  );
}
