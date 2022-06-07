import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../estilos/ItemListContainer.css'
import Loader from '../Loader';
import ItemList from '../ItemList';
import {getFirestore, collection, getDocs, where, query } from 'firebase/firestore'





const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    
    const {id} = useParams();     


    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'productos');
        if (!id) {
            getDocs(queryCollection)
            .then(resp => resp.docs.map(el => ({id: el.id, ...el.data()})))
            .then(data => data.sort((a, b) => {
                if (a.categoria > b.categoria) {
                    return 1;
                }
                if (a.categoria < b.categoria) {
                    return -1;
                }
                return 0;
            }))
            .then(sorted => setItems(sorted))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        } else {
            const queryCollectionFilter = query(queryCollection, where('categoria','==',id));
            getDocs(queryCollectionFilter)
            .then(resp => setItems(resp.docs.map(el => ({id: el.id, ...el.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        }
    },[id]);

   


    return (
        <div className="product-list-container">
              {loader?
                <Loader/>:
        <ItemList items={items}></ItemList>}
        </div>
    );
};

export default ItemListContainer;
