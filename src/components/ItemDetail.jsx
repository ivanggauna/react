

const ItemDetail = ({ product }) => {
    
    return (
        <div className="row">            
            <div className="col">
                <img src={product.image} alt="" />
            </div>
      
            <div className="col">
                <h2>{product.categoria}</h2>
                <h2>{product.name}</h2>
                <p>Precio:${product.price}</p>              
               
            </div>
        </div>
       
    )
};

export default ItemDetail