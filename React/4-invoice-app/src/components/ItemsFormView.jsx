import { useEffect, useState } from "react";

export const ItemsFormView = ({ handler }) => {
  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState;

  useEffect(() => {
    // console.log("Price changed:", price);
  }, [price]);

  useEffect(() => {
    // console.log("formItemsState changed:", formItemsState);
  }, [formItemsState]);

  const onInputChange = ({ target: { name, value } }) => {
    // console.log(name);
    // console.log(value);

    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const onInvoiceItemSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length === 0) {
      alert("Product name cannot be empty");
      return;
    }
    if (price <= 0 || isNaN(price)) {
      alert("Price must be a positive number");
      return;
    }
    if (quantity <= 0 || isNaN(quantity)) {
      alert("Quantity must be a positive integer");
      return;
    }

    handler(formItemsState);

    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
      <form className="w-50" onSubmit={(event) => onInvoiceItemSubmit(event)}>
        <input
          type="text"
          name="product"
          value={product}
          placeholder="Product"
          className="form-control m-3"
          onChange={onInputChange}
        />

        <input
          type="text"
          name="price"
          value={price}
          placeholder="Price"
          className="form-control m-3"
          onChange={(event) => onInputChange(event)}
        />

        <input
          type="text"
          name="quantity"
          value={quantity}
          placeholder="Quantity"
          className="form-control m-3"
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-primary m-3">
          Add new item
        </button>
      </form>
    </>
  );
};
