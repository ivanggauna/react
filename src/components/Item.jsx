import React from 'react';
import ItemCount from './ItemCount.jsx';

import './estilos/item.css';

const Item = (item) => {
  const onAdd = (cantidad) => {
    alert(`Añadiste ${cantidad} productos a tu carrito`);
  };

  return (
    <article className="product-card">
      <img className="product-card_image" src={item.image} alt="" />

      <h3 className="product-card_nombre">{item.name}</h3>

      <span className="product-card_precio">$ {item.price}</span>

      <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
