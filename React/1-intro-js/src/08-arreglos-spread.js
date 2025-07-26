
const products = [
    'table', 'chair', 'notebook', 'keyboard'
];
const products2 = products.concat(['LCD monitor', 'Sony TV']);

const fruits = ['pears', 'apples', 'watermelons', 'strawberries'];

const shopping = [ ...products2, ...fruits, 'lettuces', 'potatoes', 'grapes'];

const shopping2 = products2.concat(fruits.concat('lettuces', 'potatoes', 'grapes'));

console.log(products);
console.log(products2)
console.log(shopping);
console.log(shopping2);