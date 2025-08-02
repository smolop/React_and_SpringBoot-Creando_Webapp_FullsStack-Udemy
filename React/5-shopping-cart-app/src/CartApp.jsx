import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
  const { cartItems, handlerAddProductCart, handlerRemoveProductCart } =
    useItemsCart();

  return (
    <>
      <Navbar />
      <div className="container my-3">
        <h3>Shopping Cart App</h3>

        <CartRoutes
          handlerAddProductCart={handlerAddProductCart}
          handlerRemoveProductCart={handlerRemoveProductCart}
          cartItems={cartItems}
        />
      </div>
    </>
  );
};
