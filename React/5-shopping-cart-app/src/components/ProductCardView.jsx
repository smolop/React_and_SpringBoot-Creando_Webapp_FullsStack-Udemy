import { useNavigate } from "react-router-dom";


export const ProductCardView = ( {handlerAddProductCart, id, name, description, price} ) => {

const navigate = useNavigate();

const onAddProduct = (product) => {
  console.log(product);
  handlerAddProductCart(product);
  navigate('/cart');
}

  return (
    <>
        <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    <strong>Price: {price}</strong>
                  </p>
                  <button className="btn btn-primary"
                  onClick={() => onAddProduct({id, name, description, price})}>Add to Cart</button>
                </div>
              </div>
    </>
  )
}
