import { AddProductCart, RemoveProductCart, UpdateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case AddProductCart:
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ];

    case UpdateQuantityProductCart:
      return state.map((item) => {
        if (item.product.id === action.payload.id) {
            console.log("Updating quantity for product:", item.product.id);
            console.log("Current quantity:", item.quantity);
          return {
            ...item,
            quantity: item.quantity + 1
        }
      }
        return item;
      });

    case RemoveProductCart:
      return [...state.filter((item) => item.product.id !== action.payload.id)];

    default:
      return state;
  }
};
