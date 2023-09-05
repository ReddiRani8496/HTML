let a = 20;
console.log(a);
//let a = 30; // we can't declare another variable with same name, using let datatype

var b = 20;
var b = 30; // we can declare another variable with same name, using var datatype
console.log(b);

for(let i = 0; i < 10; i++) {
    console.log(i);
    var j = 80;
    let k = 90;
}
console.log(j); // we can access var datatype variable outside the block

//console.log(k); // we can't access let datatype variable outside the block, the scope is within the block

m = 100;  // we can assign the value to variable before declaration by using var.
console.log(m);
var m;

// n = 120;  it is not possible to assign the variable before declaration
// console.log(n);
// let n;


// const is used to declare constant values, once the value is assigned, we can't modify the value

const pi = 3.14;
console.log(pi);