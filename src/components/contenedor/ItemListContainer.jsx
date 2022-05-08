import React from 'react';
import ItemCount from '../ItemCount';
import '../estilos/itemListContainer.css';

const itemListContainer = ({ greetings = "Hola soy un saludo de prueba" }) => {
    const onAdd = (cantidad) => {
        alert(`Añadiste ${cantidad} productos a tu carrito`);
    }

    return (

        <section className="">
            <div className="">
                <h1 className='saludo'>{greetings}</h1>
                <ItemCount onAdd={onAdd} />
            </div>


        </section>
    );
};

export default itemListContainer;
