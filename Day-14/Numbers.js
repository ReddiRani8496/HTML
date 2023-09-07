let x = 123e2;
console.log(x);

let y = 123e-2;
console.log(y);

let m = 9999999999999999n; // for bigint append n
console.log(m);

let n = BigInt(1234567890123456789012345);
console.log(n);

let p = Number.MAX_SAFE_INTEGER; // returns max bigint
console.log(p);

let q = Number.MIN_SAFE_INTEGER; // returns min bigint
console.log(q);

let num = 10;
num=toString(num);
console.log(typeof(num));

let l = 9.656;
l.toExponential(2);

let k=3.56;
console.log(k.toPrecision(2));

let str='10';
console.log(str.valueOf(str));

console.log(parseInt("10"));
console.log(parseFloat("20"));

console.log(Number.isInteger(10));
console.log(Number.isInteger('10'));
console.log(Number.isSafeInteger(m));

let a = Number.EPSILON;
console.log(a);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(-1/0); // negative infinity
console.log(1/0); // positive infinity
console.log(1/'apple'); // not a number

