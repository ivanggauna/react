import { useState } from "react";
import { UseCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Buttons from "./Buttons";
import "../components/styles/itemDetail.css";

const ItemDetail = ({ product }) => {
  const [inputType, setInputType] = useState("itemCount");
  const { addToCart } = UseCartContext();

  function onAdd(quantity) {
    addToCart({ ...product, quantity });
  }

  function handleInputType() {
    setInputType("Buttons");
  }

  return (
    <div className="background-detail">
      <div className="image-position">
        <img src={product.image} alt="" />
      </div>
      <div className="product-category">
        <h2>{product.categoria} </h2>
      </div>
      <div className="product-name">
        <h3>{product.name}</h3>
      </div>
      <div className="product-price">
        <p>Precio: ${product.price}</p>
      </div>

      {inputType === "itemCount" ? (
        <ItemCount
          product={product}
          initial={1}
          stock={product.stock}
          onAdd={onAdd}
          handleInputType={handleInputType}
        />
      ) : (
        <Buttons />
      )}
    </div>
  );
};

export default ItemDetail;
