

const users = ['Pepe', 'Ana', 'Maria', 'Juan', 'Sebastian', 'Carlos', 'Josefa'];

const [pepe, ana, maria, ...remaining] = users

console.log(pepe, ana, maria, ...remaining);


