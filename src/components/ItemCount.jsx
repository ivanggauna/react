import React from 'react';
import { useState } from 'react';
import './estilos/itemCount.css'

/* La funcion tiene que tener stock, initial,  onAdd  */
const ItemCount = ({ onAdd }) => {

    const initial = 1; /* Para que el contador siempre inicie en 1 */
    const stock = 5; /* Stock maximo, limite de contador */

    /* Hook */
    const [cantidad, setCantidad] = useState(initial)

    /* Funcion que usa el hook y recibe valor por parametro */
    const añadirProducto = (valor) => {
        setCantidad(cantidad + valor);
    };

    return (
        <div className='itemCountContainer'>
            <div className='itemCountContainer__general'>
                <button className='itemCountContainer__boton' onClick={() => añadirProducto(-1)}
                    disabled={cantidad === initial ? true : false}>
                    -
                </button>
                <span className='itemCountContainer__cantidad'>
                    {cantidad}
                </span>
                <button className='itemCountContainer__boton' onClick={() => añadirProducto(+1)}
                    disabled={cantidad === stock ? true : false}>
                    +
                </button>
            </div>

            <button className='botonAñadir' onClick={() => onAdd(cantidad)} disabled={stock === 0 ? true : false}>
                Añadir
            </button>


        </div>
    )

}





export default ItemCount