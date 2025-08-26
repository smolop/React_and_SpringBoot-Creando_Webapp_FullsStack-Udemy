import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handlerAddProductCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductData = async () => {
    const productsData = await getProducts();
    setProducts(productsData);
    setIsLoading(false);
  };

  useEffect(() => {
    setInterval(() => {
      console.log("Refrescando...");
      getProductData();
    }, 500);
  }, []);

  return (
    <>
      {isLoading && <div className="alert alert-info">Loading products...</div>}
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-4" key={product.id}>
              <ProductCardView
                handlerAddProductCart={(product) =>
                  handlerAddProductCart(product)
                }
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
