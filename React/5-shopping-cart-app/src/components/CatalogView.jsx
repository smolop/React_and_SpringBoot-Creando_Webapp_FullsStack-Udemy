import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({handlerAddProductCart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = getProducts();
    setProducts(productsData);
  }, []);

  return (
    <>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-4" key={product.id}>
              <ProductCardView 
              handlerAddProductCart={(product) => handlerAddProductCart(product)}
              id={product.id}
              name={product.name} 
              description={product.description} 
              price={product.price} />
            </div>
          );
        })}
      </div>
    </>
  );
};
