import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import Loader from "../Loader";


const ItemDetailContainer = () => {   
    const [product, setProduct] = useState([])    
    const [loader,setLoader] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, 'productos', id);
        getDoc(dbQuery)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[id]);

    
   
    return (
        <div>
              {loader?
                <Loader/>:
            <ItemDetail product= {product} />}
        </div>
    )
};

export default ItemDetailContainer;