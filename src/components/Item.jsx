import React from 'react';
import ItemCount from './ItemCount.jsx';
import './estilos/item.css';
import { Link } from 'react-router-dom';

const Item = (item) => {
  const onAdd = (cantidad) => {
    alert(`Añadiste ${cantidad} productos a tu carrito`);
  };

  return (
    <article className="product-card">
      <Link to={`/detail/${item.id}`}>
      <img className="product-card_image" src={item.image} alt="" />
      </Link>

      <h3 className="product-card_nombre">{item.name}</h3>

      <span className="product-card_precio">$ {item.price}</span>

    
     
    </article>
  );
};

export default Item;
