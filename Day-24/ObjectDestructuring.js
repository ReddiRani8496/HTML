const person = {
  name: "rahul",
  age: 20,
  printName: function () {
    console.log(this.name);
  },
};

const { name: personName, age: personAge } = person;

console.log(personName); // rahul
console.log(personAge); // 20
