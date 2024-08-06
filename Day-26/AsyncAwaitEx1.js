const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

// fetch returns a promise that is stored in response object
// converting the promise to json that is stored in data
// finally printing the data.
// if there is any error catch block will be executed
