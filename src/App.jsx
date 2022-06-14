import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/container/ItemDetailContainer";
import ItemListContainer from "./components/container/ItemListContainer";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Cart from "./components/Cart";
import CartContextProv from "./context/CartContext";

function App(){
    return(
        <BrowserRouter> 
        <CartContextProv>
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element ={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element ={<ItemListContainer/>}/>
                <Route path="/detail/:id" element= {<ItemDetailContainer/>}/>
                <Route path="/cart" element ={<Cart/>}/>
                <Route path="/*" element ={<Navigate to ="/" replace/>}/>
            </Routes>
        </div>
        </CartContextProv>
        </BrowserRouter>
    )
}

export default App;