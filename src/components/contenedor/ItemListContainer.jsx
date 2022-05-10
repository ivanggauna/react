import React from 'react';
import ItemCount from '../ItemCount';
import '../estilos/itemListContainer.css';
import ItemList from '../ItemList';
import Item from '../Item';

const itemListContainer = ({ greetings = "Hola soy un saludo de prueba" }) => {
    const onAdd = (cantidad) => {
        alert(`Añadiste ${cantidad} productos a tu carrito`);
    }

    return (

        <section className="">
            <div className="">
                <h1 className='saludo'>{greetings}</h1>                 
                <ItemList items={Item}/>
            </div>


        </section>
    );
};

export default itemListContainer;
