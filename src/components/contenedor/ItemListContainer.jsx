import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../estilos/ItemListContainer.css'
import { getFetch } from '../helpers/getFetch';
import Loader from '../Loader';
import ItemList from '../ItemList';
import {getFirestore, collection, getDocs } from 'firebase/firestore'





const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    
    const {id} = useParams();   
   
   


    
    useEffect(( )=> {
        const db = getFirestore()
        
        const queryCollection = collection(db, 'productos')
        getDocs(queryCollection)
        .then(resp => setItems (resp.docs.map(item => ( {id: item.id, ...item.data() } )) ) )
        .catch(err => console.log(err))
        .finally(() => setLoader(false))        
    },[id])



    return (
        <div className="product-list-container">
              {loader?
                <Loader/>:
        <ItemList items={items} id={id}></ItemList>}
        </div>
    );
};

export default ItemListContainer;
