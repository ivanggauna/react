import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../estilos/ItemListContainer.css'
import { getFetch } from '../helpers/getFetch';
import Loader from '../Loader';
import ItemList from '../ItemList';




const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
            getFetch()
            .then(data => setItems(data))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        }, 2000);
    },[]);


    return (
        <div className="product-list-container">
              {loader?
                <Loader/>:
        <ItemList items={items} id={id}></ItemList>}
        </div>
    );
};

export default ItemListContainer;
