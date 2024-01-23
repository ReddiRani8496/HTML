const users = [
  { firstName: "akash", lastName: "b", age: 26 },
  { firstName: "dhanush", lastName: "a", age: 75 },
  { firstName: "dinesh", lastName: "c", age: 50 },
  { firstName: "mahesh", lastName: "d", age: 26 },
];

const output = users.reduce(function (acc, cur) {
  if (acc[cur.age]) {
    arr[cur.age] = ++acc[cur.age];
  } else {
    acc[cur.age] = 1;
  }
  return acc;
}, {});

console.log(output);

const ageLessThan30 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(ageLessThan30);
