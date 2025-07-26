const invoice = {
  id: 10,
  name: "Offices shopping",
  date: new Date(),
  client: {
    id: 2,
    name: "Jhon",
    lastname: "Doe",
    age: 20,
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
    {
      product: "paper",
      price: 100,
      quantity: 10,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: function () {
    return `Hello ${this.client.name}`;
  },
};

// const invoice2 = invoice;
const invoice2 = {...invoiceById};


const result = invoiceById === invoice2;

if (result) console.log(result);
else console.log('No son iguales');

invoice2.id = 20

console.log(invoiceById.id);
console.log(invoice2.id);