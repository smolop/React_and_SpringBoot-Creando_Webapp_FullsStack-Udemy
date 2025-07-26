const paper = {
    product: "paper",
    price: 100,
    quantity: 10,
  }

const invoices = [
  {
    id: 1,
    name: "Office purchases",
    client: {
      name: "Maria",
      lastname: "Doe",
    },
    items: [
      {
        product: "keyboard",
        price: 399,
        quantity: 2,
      },
      {
        product: "mouse",
        price: 200,
        quantity: 1,
      },
      paper,
    ],
  },
  {
    id: 2,
    name: "Cumputer purchases",
    client: {
      name: "Pepe",
      lastname: "Doe",
    },
    items: [
      {
        product: "keyboard",
        price: 399,
        quantity: 2,
      },
      {
        product: 'Monitor 17"',
        price: 800,
        quantity: 1,
      },
      {
        product: "CPU Intel",
        price: 1000,
        quantity: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Stationery purchases",
    client: {
      name: "Jhon",
      lastname: "Doe",
    },
    items: [
      {
        product: "pencil",
        price: 50,
        quantity: 1,
      },
      paper,
    ],
  },
];


const invoiceByClientName = (clientName) => invoices.find(
  (invoice) => invoice.client.name === clientName
);

const invoiceById = (id) => invoices.find((invoice) => invoice.id === id);

const findInvoiceById = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = invoiceById(id);
      if (result) resolve(result);
      else reject("Error: The invoice doesn't exists");
    }, 1500);
  });
  return promise;
};

export {
    paper,
    invoices,
    invoiceByClientName,
    invoiceById,
    findInvoiceById
}