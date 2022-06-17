import { createContext, useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import swal from "sweetalert";

const cartContext = createContext([]);

export function UseCartContext() {
  return useContext(cartContext);
}

export default function CartContextProv({ children }) {
  const [cartList, setCartList] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [totalItems, setTotalItems] = useState();
  const [qtyInCart, setQtyInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function isInCart(item) {
    return cartList.some((el) => el.id === item.id);
  }
  function addToCart(item) {
    if (isInCart(item)) {
      let i = cartList.findIndex((el) => el.id === item.id);
      const newCartList = cartList;
      newCartList[i].quantity += item.quantity;
      updateCart(newCartList);
    } else {
      updateCart([...cartList, item]);
    }
  }
  function updateCart(arr) {
    setCartList(arr);
    setTotalPrice(
      arr
        .map((curr) => curr.quantity * curr.price)
        .reduce((acc, curr) => acc + curr, 0)
    );
    setTotalItems(
      arr.map((curr) => curr.quantity).reduce((acc, curr) => acc + curr, 0)
    );
  }

  const removeItem = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };

  const totalQuantity = () => {
    return cartList.reduce((count, prod) => (count += prod.quantity), 0);
  };

  function clearCart(sent) {
    if (sent !== "sent") setOrderId("");
    updateCart([]);
  }

  function checkQtyInCart(item) {
    if (isInCart(item)) {
      let i = cartList.findIndex((el) => el.id === item.id);
      setQtyInCart(cartList[i].quantity);
    } else {
      setQtyInCart(0);
    }
  }

  function clearItem(id) {
    let i = cartList.findIndex((el) => el.id === id);
    const newCartList = cartList;
    newCartList.splice(i, 1);
    updateCart(newCartList);
  }

  function createOrder(userData) {
    let order = {};
    order.userData = userData;
    order.total = totalPrice;

    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price * cartItem.quantity;

      return { id, name, price };
    });

    const db = getFirestore();
    const queryCollectionOrders = collection(db, "orders");
    addDoc(queryCollectionOrders, order)
      .then((resp) =>
        swal({
          title: `Gracias por su compra ${userData.name}`,
          text: `Su numero de orden es: ${resp.id}`,
          icon: "success",
        })
      )
      .catch((err) => console.log(err))
      .finally(clearCart());
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        qtyInCart,
        addToCart,
        clearCart,
        totalQuantity,
        totalItems,
        totalPrice,
        removeItem,
        clearItem,
        orderId,
        createOrder,
        checkQtyInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
