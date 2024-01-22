// set time out using var
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i); // always print 6
//     }, i * 1000);
//   }
//   console.log("javascript");
// }
// x();

//
// set timeout using let
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i); // always print 6
//     }, i * 1000);
//   }
//   console.log("javascript");
// }
// x();

// set time out using var and clouser
function x() {
  for (let i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(i); // always print 6
      }, i * 1000);
    }
    close(i);
  }
  console.log("javascript");
}
x();
