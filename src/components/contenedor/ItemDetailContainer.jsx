import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import Loader from "../Loader";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {   
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const [loader,setLoader] = useState(true);

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