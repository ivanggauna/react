import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { getFetch } from "../helpers/getFetch";
import Loader from "../Loader";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        getFetch(id)
            .then(respuesta => setProduct(respuesta))
            .catch((err) => console.log(err))
            .finally(() => setLoader(false))
    }, [])


   
    return (
        <div>
              {loader?
                <Loader/>:
            <ItemDetail product= {product} />}
        </div>
    )
};

export default ItemDetailContainer;