console.log("Start");

setTimeout(function cb() {
  console.log("Call back");
}, 5000);
console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("while expires");

// output
//start
// end
// while expires
// call back
// set timeout sometimes may not execute as the time reached
// next lines after set timeout executed, then settime out executed

console.log("Start");
setTimeout(function cb() {
  console.log("Call back");
}, 0);
console.log("End");

// output: start end call back
// call back is executed only when stack is empty
