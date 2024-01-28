// let name1 = {
//   firstName: "rahul",
//   lastName: "david",
// };

// let printFullName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };

// let name2 = {
//   firstName: "murgan",
//   lastName: "saym",
// };

// printFullName.call(name1);
// printFullName.call(name2);

let name1 = {
  firstName: "rahul",
  lastName: "david",
};

let printFullName = function (gender, city) {
  console.log(this.firstName + " " + this.lastName + " " + gender + " " + city);
};

let name2 = {
  firstName: "murgan",
  lastName: "saym",
};

printFullName.call(name1, "male", "hyd"); // in call method we pass seperate values seperated by comma
printFullName.apply(name2, ["male", "tpt"]); // in apply method instead of passing seperately we can pass as array of values

// bind method (gives the copy of method)
let printMyName = printFullName.bind(name2, "male", "chennai"); // it will bind the function and return the function
console.log(printMyName);
printMyName(); // to invoke the method
