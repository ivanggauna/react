import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/contenedor/ItemDetailContainer";
import ItemListContainer from "./components/contenedor/ItemListContainer";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Cart from "./components/Cart";

function App(){
    return(
        <BrowserRouter> 
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
        </BrowserRouter>
    )
}

export default App;