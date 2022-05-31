import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]); 

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

  
    
    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            totalQuantity,
            totalPrice,
            removeItem,           
            clearItem
        }}>
            {children}
        </cartContext.Provider>
    );
}

