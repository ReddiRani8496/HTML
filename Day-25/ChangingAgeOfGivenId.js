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

const changeAge = (id, newAge) => {
  const updatedUserArray = users.map((user) => {
    if (user.id === id) {
      return { ...user, age: newAge };
    }
    return user;
  });
  return updatedUserArray;
};

const updatedUsers = changeAge(2, 25);
console.log(updatedUsers);
