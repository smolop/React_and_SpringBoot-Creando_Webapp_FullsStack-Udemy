const user = {
    username: 'sebas',
    email: 'email@example.com',
    age: 20,
    ranking: 9
}

const detail = ({username, email}) => {
    console.log(`The user ${username} email is ${email}`);
}

const { username, ranking, age } = user;

console.log(`${username} is ${age} years old`);
console.log(ranking);

detail(user);