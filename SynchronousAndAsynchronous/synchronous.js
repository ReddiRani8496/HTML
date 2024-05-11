/*By default js is synchronous language.
  It won't skip the next line of code until the current line is executed.
*/

console.log("Printing numbers from 1 to 1000");

for (var i = 1; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

console.log("Completed printing numbers from 1 to 1000");
