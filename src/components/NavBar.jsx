import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import { UseCartContext } from "../context/CartContext";

function NavBar() {
  const { totalQuantity } = UseCartContext();

  const logo = "../src/logoNew.webp";

  return (
    <header className="header">
      <div className="contenedor-logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="marca" />
        </Link>
      </div>

      <nav>
        <ul className="contenedor-nav">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/">Productos</Link>
          </li>
          <li>
            <Link to="/categoria/pinturas">Pinturas</Link>
          </li>
          <li>
            <Link to="/categoria/maquetas">Maquetas</Link>
          </li>
        </ul>
      </nav>

      <div className="cartText">
        {totalQuantity() !== 0 && totalQuantity()}
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
