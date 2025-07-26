// httpClient
// .then(response => response.json())
// .then(data => console.log(data));

const finadAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const ul = document.createElement("ul");

  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.append(li);
    console.log(user.name);
  });

  const root = document.getElementById('root');
  root.appendChild(ul);
};

finadAllUsers();

// console.log(users);
console.log("Hi! Waht up!");
