const users = [
  {
    id: 1,
    name: "john",
    age: 25,
  },
  {
    id: 2,
    name: "jane",
    age: 30,
  },
  {
    id: 3,
    name: "mike",
    age: 28,
  },
  {
    id: 4,
    name: "sarah",
    age: 22,
  },
];

const removeUser = (name) => {
  const newUsersArray = users.filter((user) => user.name !== name);
  return newUsersArray;
};

console.log(removeUser("sarah"));
