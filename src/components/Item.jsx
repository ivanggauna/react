import React from "react";
import "./styles/item.css";
import { Link } from "react-router-dom";

const Item = (item) => {
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
