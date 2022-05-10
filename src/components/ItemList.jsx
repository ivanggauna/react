import React, { useEffect, useState } from 'react';
import Item from './Item';
import './estilos/ItemList.css';
import imagenes from '../imagenes/imagenes.js';


const productos = [
    { id: "01", name: "RG God Gundam", price: 300, image: imagenes.imagen3, stock: 2 },
    { id: "02", name: "MG Unicorn Extreme", price: 350, image: imagenes.imagen1, stock: 4 },
    { id: "03", name: "PG MK II Titans", price: 400, image: imagenes.imagen2, stock: 5 },

];

const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
})

const ItemList = () => {
    const [products, setProductos] = useState([]);

    useEffect(() => {
        getFetch
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        
    }, []);

    return (
        <div className="product-list-container">
            {products.length ? (
                <>
                    {productos.map((products) => {
                        return (
                            <div key={products.id}>
                                <Item
                                    name={products.name}
                                    image={products.image}
                                    price={products.price}
                                    stock={products.stock}
                                    id={products.id}
                                />
                            </div>
                        );
                    })}
                </>
            ) : (
                <p>Cargando productos...</p>
            )}
        </div>
    );
};

export default ItemList;
