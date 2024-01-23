const arr = [1, 2, 3, 4, 5];

function double(x) {
  return x * 2;
}

function binary(x) {
  return x.toString(2);
}

const output = arr.map(double);
console.log(output);

const res = arr.map((x) => {
  return x * 2;
});
