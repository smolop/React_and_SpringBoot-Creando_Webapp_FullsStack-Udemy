// httpClient
// .then(response => response.json())
// .then(data => console.log(data));

const finadAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};

const users = await finadAllUsers();

console.log(users);
console.log("Hi! Waht up!");
