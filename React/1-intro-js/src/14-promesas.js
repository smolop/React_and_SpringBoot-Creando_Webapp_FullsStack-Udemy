import { findInvoiceById as findInvoiceById } from "./data/invoices";

findInvoiceById(3).then((json) => console.log(json)).catch(console.error);
