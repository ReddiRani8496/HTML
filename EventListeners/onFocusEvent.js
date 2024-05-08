let username = document.getElementById("username");
let password = document.getElementById("pswd");
let btn = document.getElementById("submit");

username.addEventListener("focus", (e) => {
  username.style.backgroundColor = "#F88379";
  username.style.color = "white";
});

password.addEventListener("focus", (e) => {
  password.style.backgroundColor = "#F4C2C2";
  password.style.color = "white";
});

btn.addEventListener("focus", (e) => {
  btn.style.backgroundColor = "blue";
  btn.style.color = "white";
});
