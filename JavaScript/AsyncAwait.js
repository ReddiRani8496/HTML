// always returns a promise
async function getData() {
  return "Hello";
}

const dataPromise = getData();
dataPromise.then((res) => console.log(res)); // hello

const p = new Promise((resolve, reject) => {
  resolve("promise is returned");
});

async function getdata() {
  return p;
}

const data = getdata();
data.then((res) => console.log(res)); // promise is returned

async function handlePromise() {
  const val = await p; // await is a keyword, that is used only inside async function
  console.log(val);
}
handlePromise();
