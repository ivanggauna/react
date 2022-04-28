import React from 'react';

import '../estilos/itemListContainer.css';

const itemListContainer = ({ greetings = "Hola soy un saludo de prueba" }) => {
    
    return (

        <section className="">
            <div className="">
                <h1 className='saludo'>{greetings}</h1>
            </div>
        </section>
    );
};

export default itemListContainer;
