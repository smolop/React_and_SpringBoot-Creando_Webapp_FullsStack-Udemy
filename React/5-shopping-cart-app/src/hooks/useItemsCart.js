import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import {
  AddProductCart,
  RemoveProductCart,
  UpdateQuantityProductCart,
} from "../reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const useItemsCart = () => {
  const [cartItems, dispatchCartItems] = useReducer(
    itemsReducer,
    initialCartItems
  );

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);
    if (hasItem) {
      dispatchCartItems({
        type: UpdateQuantityProductCart,
        payload: product,
      });
    } else {
      dispatchCartItems({
        type: AddProductCart,
        payload: product,
      });
    }
  };

  const handlerRemoveProductCart = (productId) => {
    dispatchCartItems({
      type: RemoveProductCart,
      payload: { id: productId },
    });
  };

  return {
    cartItems,
    handlerAddProductCart,
    handlerRemoveProductCart,
  };
};
