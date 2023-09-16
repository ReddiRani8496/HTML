let url="https://jsonplaceholder.typicode.com/users/1";
async function getData() {
    let response = await fetch(url);
    let user = await response.json();
    console.log(user);
}
getData();