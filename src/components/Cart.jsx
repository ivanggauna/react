import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";





export default function Cart  () {
    const {cartList, clearCart, totalPrice,removeItem} = UseCartContext()
    
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
    return(
        <div className="cart">
        <h1 className="cart__title">Su pedido:</h1>
        {cartList.map(product =>
        <li key={product.id}>{product.name} -Precio:{product.price} - Cantidad: {product.quantity}
        <button onClick={ () => removeItem(product.id)}> X </button></li>)}
        <p>{`Costo total: $${totalPrice()}`}</p>
        <button onClick={clearCart}>Vaciar pedido</button>
    </div>
        )
}
