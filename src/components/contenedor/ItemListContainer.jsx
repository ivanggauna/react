import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../estilos/ItemListContainer.css'
import Item from '../Item';
import { getFetch } from '../helpers/getFetch';




const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getFetch()
                .then(respuesta => setProducts(respuesta.filter((Item) => Item.categoria === id)))
                .catch((err) => console.log(err))
        } else {
            getFetch()
                .then(respuesta => setProducts(respuesta))
                .catch((err) => console.log(err))

        }

    }, [id])


    return (
        <div className="product-list-container">
            {products.length ? (
                <>
                    {products.map((products) => {
                        return (
                            <div key={products.id}>
                                <Item
                                    name={products.name}
                                    image={products.image}
                                    price={products.price}
                                    stock={products.stock}
                                    id={products.id}
                                    categoria={products.categoria}
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

export default ItemListContainer;
