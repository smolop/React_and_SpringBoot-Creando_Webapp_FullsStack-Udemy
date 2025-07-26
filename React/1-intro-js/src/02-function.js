const sayHello = (name = 'DefaultName', age = 0) => `Hello world function! ${name} age: ${age}`;

const add = (a = 0, b = 0) => a + b;

let name = 'Sebas';
let age = 20;
const result = sayHello(name, age);

console.log(result);
console.log(add(10, 5));