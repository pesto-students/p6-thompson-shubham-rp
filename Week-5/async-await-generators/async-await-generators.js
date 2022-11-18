import fetch from "node-fetch";

// Task 1 - fetch using generators

function* fetchUsersUsingGenerators() {
  yield fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      return users;
    });
}

const iter1 = fetchUsersUsingGenerators();
iter1.next().value.then((users) => console.log(users[2]));

// Task 2 - fetch using async await
async function fetchUsersUsingAsyncAwait() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return console.log(users[0]);
}

fetchUsersUsingAsyncAwait();

// Task 3 - fetch using async/await & generators

async function* fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  yield await response.json();
}

const iter2 = fetchUsers();
iter2.next().then(({ value, done }) => {
  let usersArray = value;
  console.log(usersArray[1]);
});
