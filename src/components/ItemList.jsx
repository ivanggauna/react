import React from 'react';
import { useState, useEffect } from 'react';
import './estilos/Itemlist.css';
import { useParams } from 'react-router-dom';
import { getFetch } from './helpers/getFetch';
import Item from './Item'
import Loader from './Loader';



const itemList = ({items}) => {
 

  /*   useEffect(() => {
        if (id) {
            getFetch()
                .then(respuesta => setProducts(respuesta.filter((Item) => Item.categoria === id)))
                .catch((err) => console.log(err))
        } else {
            getFetch()
                .then(respuesta => setProducts(respuesta))
                .catch((err) => console.log(err))

        }

    }, [id]) */

    return (

        <section className="">
            <div className="">
            <div className="product-list-container">
            {items.length ? (
                <>
                    {items.map((products) => {
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
                <Loader></Loader>
            )}
        </div>
            </div>


        </section>
    );
};

export default itemList;
