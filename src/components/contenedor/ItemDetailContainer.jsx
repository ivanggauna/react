import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { getFetch } from "../helpers/getFetch";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getFetch(id)
            .then(respuesta => setProduct(respuesta))
            .catch((err) => console.log(err))
    }, [])


   
    return (
        <div>
            <ItemDetail product= {product} />
        </div>
    )
};

export default ItemDetailContainer;