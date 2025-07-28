import { invoice } from "../data/Invoice";


export const getInvoice = () => {

    // console.log(invoice);
    // let total = 0;
    // invoice.items.forEach(item => {
    //     total += item.price * item.quantity;
    // });

    const total  = calculateTotal(invoice.items);

    return {...invoice, total: total};
};

export const calculateTotal = (items) => {
    return items
        .map(item => item.price * item.quantity)
        .reduce((accumulator, itemTotal) => accumulator + itemTotal, 0);
};
