// we can retrieve the data either by using fetch() or by using axios
// they return a promise.
// states of promise -> pending, resolved, or rejected
// for fetch we have to convert the promise to json()
// for axios we have to convert the promise to data.

// axios
const axios = require("axios");
const response = axios.get("https://jsonplaceholder.typicode.com/todos");

response
  .then((res) => {
    console.log(res);
    return res.data; // it will return the json data to next then method
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
