import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/contenedor/ItemListContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <NavBar/>
    <ItemListContainer/>  
  </React.StrictMode>
)
