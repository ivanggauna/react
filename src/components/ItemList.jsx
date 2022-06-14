import React from 'react';

import './styles/Itemlist.css';

import Item from './Item'
import Loader from './Loader';



const itemList = ({items}) => { 


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
