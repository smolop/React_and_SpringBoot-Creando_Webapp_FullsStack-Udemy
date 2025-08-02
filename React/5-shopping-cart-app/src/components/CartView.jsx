import React, { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";

export const CartView = ({ handlerRemoveProductCart, items }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const onDeleteProduct = (productId) => {
    console.log("Deleting product:" + productId);
    handlerRemoveProductCart(productId);
  };

  useEffect(() => {
    setTotal(calculateTotal(items) || 0);
  }, [items]);

  const onCatalog = () => {
    navigate("/catalog");
  };

  return (
    <>
      <h3>Shopping Cart</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {console.log(items)}
          {items.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.product.price * item.quantity}</td>
              <td>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => onDeleteProduct(item.product.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              <strong>Total</strong>
            </td>
            <td colSpan="2" className="text-start fw-bold  ">
              <strong>{total}</strong>
            </td>
          </tr>
        </tfoot>
      </table>

      <button className="btn btn-primary" onClick={onCatalog}>
        Continue buying
      </button>
    </>
  );
};
