import React from "react";
import { useState } from "react";
import "./styles/itemCount.css";

/* La funcion tiene que tener stock, initial,  onAdd  */
const ItemCount = ({ initial, stock, onAdd, product, handleInputType }) => {
  /* Hook */
  const [cantidad, setCantidad] = useState(initial);

  /* Funcion que usa el hook y recibe valor por parametro */
  const añadirProducto = (valor) => {
    setCantidad(cantidad + valor);
  };

  function addToCart() {
    onAdd(cantidad, product.name);
    handleInputType();
  }

  return (
    <div className="itemCountContainer">
      <div className="itemCountContainer__general">
        <button
          className="itemCountContainer__boton"
          onClick={() => añadirProducto(-1)}
          disabled={cantidad === initial ? true : false}
        >
          -
        </button>
        <span className="itemCountContainer__cantidad">{cantidad}</span>
        <button
          className="itemCountContainer__boton"
          onClick={() => añadirProducto(+1)}
          disabled={cantidad === stock ? true : false}
        >
          +
        </button>
      </div>

      <button
        className="botonAñadir"
        onClick={() => addToCart(cantidad)}
        disabled={stock === 0 ? true : false}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
