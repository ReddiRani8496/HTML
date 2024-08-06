// javascript is a synchronous programming language which don't wait for
// other statements to execute.
// in order to make wait we will use asynchronous functions, with the help of async and await

const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
};

fetchData();
