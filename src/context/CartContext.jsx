import { createContext, useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const cartContext = createContext([]);


export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);
    const [orderId, setOrderId] = useState(); 

    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }
    function addToCart(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(el => el.id === item.id);
            const newCartList = cartList;
            newCartList[i].quantity += item.quantity;
            setCartList(newCartList);
        } else {
            setCartList([
                ...cartList,
                item]);
        }
    }
    const removeItem = (id)=>{
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const totalQuantity = () =>{
        return cartList.reduce((count, prod) => count += prod.quantity,0)
    }

    const totalPrice = () => {
        return cartList.reduce((count, prod) => count + (prod.price * prod.quantity),0)
    }

    function clearCart() {
        setCartList([]);
    }

    function clearItem(id) {
        let i = cartList.findIndex(el => el.id === id);
        const newCartList = cartList;
        newCartList.splice(i,1);
        updateCart(newCartList);
    }


    
    function createOrder() {
        let order = {}
        order.buyer = { name: 'Ivan', email: 'ig@hotmail.com', phone: '01122233' }
        order.total = totalPrice()

        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price * cartItem.quantity

            return { id, name, price }

        })
        
        const db = getFirestore();
        const queryCollectionOrders = collection(db, 'orders');
        addDoc(queryCollectionOrders, order)
        .then(resp => setOrderId(resp.id.toString()))                        
        .catch(err => console.log(err))
        .finally(alert("Su numero de orden es: "+orderId ),clearCart())
      
    
    }
    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            totalQuantity,
            totalPrice,
            removeItem,           
            clearItem,
            orderId,
            createOrder
        }}>
            {children}
        </cartContext.Provider>
    );
}

