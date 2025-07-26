import { paper, invoices, invoiceByClientName } from './data/invoices'

const invoiceNames = invoices.map((invoice) => invoice.name);

console.log(invoices);
console.log(invoiceNames);

const invoiceClientNames = invoices.map((invoice) => invoice.client.name);

console.log(invoiceClientNames);

const invoiceById = invoices.find((invoice) => invoice.id === 3);

console.log(invoiceById);

/* const invoiceByClientName = invoices.find(
  (invoice) => invoice.client.name === "Pepe"
); */

console.log(invoiceByClientName('Maria'));

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

