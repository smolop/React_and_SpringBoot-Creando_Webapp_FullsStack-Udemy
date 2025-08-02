import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogView } from "../components/CatalogView";
import { CartView } from "../components/CartView";


export const CartRoutes = ( { handlerAddProductCart, handlerRemoveProductCart, cartItems} ) => {



    return (
        <Routes>
          <Route
            path="catalog"
            element={
              <CatalogView
                handlerAddProductCart={(product) =>
                  handlerAddProductCart(product)
                }
              />
            }
          />

          <Route
            path="cart"
            element={
              cartItems?.length <= 0 ? 
                <div className="alert alert-warning">
                  There aren't products in the shopping cart!
                </div>
              : (
                <CartView
                  items={cartItems}
                  handlerRemoveProductCart={(productId) =>
                    handlerRemoveProductCart(productId)
                  }
                />
              )
            }
          />

          <Route path="/" element={<Navigate to={"/catalog"} />} />

        </Routes>
    );

}