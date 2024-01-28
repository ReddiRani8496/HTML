// always returns a promise
// async function getData() {
//   return "Hello";
// }

// const dataPromise = getData();
// dataPromise.then((res) => console.log(res)); // hello

// const p = new Promise((resolve, reject) => {
//   resolve("promise is returned");
// });

// async function getdata() {
//   return p;
// }

// const data = getdata();
// data.then((res) => console.log(res)); // promise is returned

// async function handlePromise() {
//   const val = await p; // await is a keyword, that is used only inside async function
//   console.log(val);
// }
// handlePromise();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise returned value");
  }, 10000);
});

function data() {
  p1.then((res) => console.log(res));
  console.log("Hello world");
}
data(); // first hello world printed, then promise value printed

// async function handlePromise() {
//   console.log("Hello world"); //prints hello world immediately don't wait for other statements
//   // JS engine was waiting for promise to resolved
//   const val = await p1;
//   console.log(val);
//   console.log("async function completed");
// }

// handlePromise(); // wait until promise completed, promise value printed , then next statement executed

async function handlePromise() {
  console.log("Hello world");

  const val = await p1;
  console.log("p1 completed");
  console.log(val);

  const val2 = await p1;
  console.log("p1 completed 2nd time");
  console.log(val2);
}

handlePromise();
// hello world printed immediately
// then program waits for 10 seconds
// after 10 seconds p1 completed,value,p1 completed 2nd time and value will be printed
// it wont for two await functions
// just wait for 10 seconds

// const promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("Promise resolved value");
//   },10000);
// })

// const promise2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("Promise resolved value");
//   },5000);
// })
// async function handlePromise1() {
//   console.log("Hello world");

//   const val = await promise1;
//   console.log("p1 completed");
//   console.log(val);

//   const val2 = await promise2;
//   console.log("p2 completed 2nd time");
//   console.log(val2);
// }

// handlePromise1();

// first hello world printed immediately
// then  program waits for 10 seconds
// prints p1 completed,value, p2 completed and value

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 10000);
});
async function handlePromise1() {
  console.log("Hello world");

  const val = await promise1;
  console.log("p1 completed");
  console.log(val);

  const val2 = await promise2;
  console.log("p2 completed 2nd time");
  console.log(val2);
}

handlePromise1();

// first hello world printed immediately
// then  program waits for 5 seconds
// and prints p1 completed and value
// then program waits for 10 seconds
// and prints p2 completed and value
