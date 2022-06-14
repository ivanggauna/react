import {  getFirestore, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";





export default function Cart() {
    const { cartList, clearCart, totalPrice, removeItem, orderId, createOrder } = UseCartContext()
    


    if (totalPrice() === 0) {
        return (
            <div className="cart">
                <h1>El pedido está vacío</h1>
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div>
        );
    }

   
    function updateOrder(){
        const db = getFirestore()
        const orderDoc = doc (db, "orders"," insertar id ");
        updateDoc(orderDoc, {total: 200});
    }

    return (
        <div className="cart">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map(product =>
                <li key={product.id}>{product.name} -Precio:{product.price} - Cantidad: {product.quantity} - Nro de orden: {orderId}
                    <button onClick={() => removeItem(product.id)}> X </button></li>)}
            <p>{`Costo total: $${totalPrice()}`}</p>
            <button onClick={clearCart}>Vaciar pedido</button>
            <button onClick={createOrder}>Generar pedido</button>
        </div>
    )
}
