/*
asynchronous code doesn't wait for the previous line of code to be executed.
*/

function asyncExample() {
  console.log("Caluculating the first 10000 prime numbers");
  console.log("waiting");
  const arr = [2];
  let number = 3;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      number++;
      break;
    } else {
      arr.push(number);
      number++;
      break;
    }
  }
  return Promise.resolve(arr);
}

asyncExample().then((arr) => {
  console.log(`we caluculate the first ${arr.length} prime numbers`);
});

console.log("Completed caluculating the first 10000 prime numbers");
