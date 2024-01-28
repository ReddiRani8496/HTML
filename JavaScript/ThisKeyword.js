"use strict"; // defining strict mode
// this in global space

console.log(this); // global Object -> window

// this inside a function

function x() {
  // the value depends on strict / non strict mode
  // if it is strict mode -> window object
  // if it is non-strict mode -> undefined will be this value
  console.log(this); // window object
}
x(); // undefined or null in strict mode

// this in strict mode -(this substitution)
// according to strict mode the value of this will be undefined or null
// this keyword will be replaced with global object only in non strict mode

// if we call window.function() output will be window object
window.x(); // window object will be output

// this insde a object's method
const obj = {
  a: 10,
  x: function () {
    // here x is called method
    console.log(this);
  },
};

obj.x(); // value of this will be object
x(); // undefined because it is in strict mode

// call, apply and bind methods (sharing methods)
const student = {
  name: "rahul",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

const student1 = {
  name: "rohit",
};
// now we need to print student name in student1 object, using student object function
student.printName.call(student1); // value of this is student1

// this keyword inside arrow function
const obj1 = {
  a: 10,
  x: () => {
    // it behaves like enclosing lexical context, the output will be window object
    console.log(this); // here enclosing lexical context is global space
  },
};

obj1.x(); // window object

// this keyword inside the nested arrow function

const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this); // here lexical environment is obj2, so output obj2
    };
    y();
  },
};

obj2.x(); // obj2 which is lexical context of y
