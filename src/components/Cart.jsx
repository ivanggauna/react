import { Link } from "react-router-dom";
import { useState } from "react";
import { UseCartContext } from "../context/CartContext";
import "./styles/Cart.css";

export default function Cart() {
  const { cartList, clearCart, totalPrice, removeItem, orderId, createOrder } =
    UseCartContext();
  const [id, setId] = useState();
  const [userData, setUserData] = useState({});
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [email2Error, setEmail2Error] = useState(false);
 

  const change = (data) => {
    setUserData({
      ...userData,
      [data.target.name]: data.target.value,
    });
  };



  const verification = () => {
    setNameError(!userData.name);
    setPhoneError(!userData.phone);
    setEmailError(!userData.emailError);
    setEmail2Error(!(userData.email2Error === userData.email));
    setId(orderId)
    if (
      userData.name &&
      userData.phone &&
      userData.email &&
      userData.email2 === userData.email
    ) {     
    createOrder(userData)
    console.log(createOrder)     
    } else {
      alert("Revise que los campos esten completos correctamente");
    }
  };

  if (totalPrice === 0) {
    return (
      <div className="cart">
        <h1>El pedido está vacío</h1>
        <Link to="/">
          <button className="buttons">Volver al menú</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1 className="cart__title">Su pedido:</h1>
      {cartList.map((product) => (
        <li key={product.id}>
          {product.name} -Precio: ${product.price} - Cantidad:{" "}
          {product.quantity} - Nro de orden: {id}
          <button onClick={() => removeItem(product.id)}> X </button>
        </li>
      ))}
      <p>{`Costo total: $${totalPrice}`}</p>

      <form action="">
        <input
          name="name"
          onChange={(data) => change(data)}
          type="text"
          placeholder="Nombre"
        />
        {nameError && <span>Ingrese un nombre</span>}
        <br />
        <input
          name="phone"
          onChange={(data) => change(data)}
          type="tel"
          placeholder="Teléfono"
        />
        {phoneError && <span>Ingrese un número de teléfono</span>}
        <br />
        <input
          name="email"
          onChange={(data) => change(data)}
          type="email"
          placeholder="Correo eléctronico"
        />
        {emailError && <span>Ingrese un correo electrónico</span>}
        <br />
        <input
          name="email2"
          onChange={(data) => change(data)}
          type="email"
          placeholder="Reingrese el correo electrónico"
        />
        {email2Error && <span>El correo electrónico debe coincidir</span>}
        <br />
        <textarea
          name="comment"
          onChange={(data) => change(data)}
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </form>

      <button className="buttons" onClick={clearCart}>
        Vaciar pedido
      </button>
      <button className="buttons" onClick={verification}>
        Generar pedido
      </button>
    </div>
  );
}
