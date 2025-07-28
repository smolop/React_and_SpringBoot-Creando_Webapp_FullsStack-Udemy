import { calculateTotal, getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import React, { useEffect, useState } from "react";
import { ItemsFormView } from "./components/ItemsFormView";

const initialInvoice = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};

export const InvoiceApp = () => {
  const [activeForm, setActiveForm] = useState(false);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(initialInvoice);

  const [items, setItems] = useState([]);

  const [total, setTotal] = useState(0);

  const { id, name: invoiceName, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    console.log("Counter changed:", counter);
  }, [counter]);

  useEffect(() => {
    // console.log("Items has changed:", items);
    setTotal(() => calculateTotal(items));
  }, [items]);

  const handlerAddInvoiceItem = ({ product, price, quantity }) => {
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price,
        quantity: parseInt(quantity, 10),
      },
    ]);

    setCounter((counter) => counter + 1);
  };

  const handlerRemoveInvoiceItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  };

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Invoice Example</div>
          <div className="card-body">
            <InvoiceView id={id} invoiceName={invoiceName} />

            <div className="row my-3">
              <div className="col-6">
                <ClientView title="Client" client={client} />
              </div>

              <div className="col-6">
                <CompanyView title="Company" company={company} />
              </div>
            </div>

            <ListItemsView title="Items" items={items} handlerRemoveItem={(id) => handlerRemoveInvoiceItem(id)}/>
            <TotalView total={total} />

            <button className="btn btn-primary" onClick={onActiveForm}>
              { !activeForm ? 'Add Item' : 'Hide Form' }
            </button>
            {!activeForm || (
              <ItemsFormView
                handler={(newItem) => handlerAddInvoiceItem(newItem)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
