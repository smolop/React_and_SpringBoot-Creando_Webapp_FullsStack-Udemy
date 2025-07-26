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

const invoiceNames = invoices.map((invoice) => invoice.name);

console.log(invoices);
console.log(invoiceNames);

const invoiceClientNames = invoices.map((invoice) => invoice.client.name);

console.log(invoiceClientNames);

const invoiceById = invoices.find((invoice) => invoice.id === 3);

console.log(invoiceById);

const invoiceByClientName = invoices.find(
  (invoice) => invoice.client.name === "Pepe"
);

console.log(invoiceByClientName);

const invoiceFilter = invoices.filter((invoice) => invoice.id >= 2);

console.log(invoiceFilter);

console.log('Delete filter')
const invoiceDeleted = invoices.filter((invoice) => invoice.id != 2);

console.log(invoiceDeleted);

const invoiceFilter2 = invoices.filter((invoice) =>
  invoice.items.includes(paper)
);

console.log(invoiceFilter2);

const result = invoices
.some((invoice) => invoice.client.name === "Juan");

console.log(result);

