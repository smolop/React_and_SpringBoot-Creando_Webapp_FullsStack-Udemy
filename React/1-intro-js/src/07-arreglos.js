


const products = [
    'table', 'chair', 'notebook', 'keyboard'
];

products.push('LCD monitor', 'Sony TV');

console.log(products);

products
.forEach(item => console.log(item));

for (const product of products)
    console.log(product);

for (let index = 0; index < products.length; index++) {
    const product = products[index];
    console.log(product);
}

console.log(products[4]);