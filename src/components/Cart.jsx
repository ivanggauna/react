import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";

export default function Cart() {
  const { cartList, clearCart, totalPrice, removeItem, orderId, createOrder } =
    UseCartContext();

  if (totalPrice() === 0) {
    return (
      <div className="cart">
        <h1>El pedido está vacío</h1>
        <Link to="/">
          <button>Volver al menú</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1 className="cart__title">Su pedido:</h1>
      {cartList.map((product) => (
        <li key={product.id}>
          {product.name} -Precio:{product.price} - Cantidad: {product.quantity}{" "}
          - Nro de orden: {orderId}
          <button onClick={() => removeItem(product.id)}> X </button>
        </li>
      ))}
      <p>{`Costo total: $${totalPrice()}`}</p>

       <form action="">
                <input name="name"  type="text" placeholder="Nombre" />
               <span>Debe ingresar un nombre</span>
                <br />
                <input name="phone"  type="tel" placeholder="Teléfono" />
               <span>Debe ingresar un teléfono</span>
                <br />
                <input name="email"  type="email" placeholder="Correo eléctronico" />
                <span>Debe ingresar un correo electrónico</span>
                <br />
                <input name="email2" type="email" placeholder="Repita correo electrónico" />
                <span>El correo electrónico no coincide</span>
                <br />
                <textarea name="comment"  id="" cols="30" rows="10"></textarea>
            </form>
      <button onClick={clearCart}>Vaciar pedido</button>
      <button onClick={createOrder}>Generar pedido</button>
    </div>
  );
}
