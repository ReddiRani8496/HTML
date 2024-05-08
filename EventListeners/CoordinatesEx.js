let btn = document.getElementById("btn");
let para = document.getElementById("p1");
let para1 = document.getElementById("p2");
let div = document.querySelector("div");
window.addEventListener("mousemove", (e) => {
  para.innerHTML = "X: " + e.pageX;
  para1.innerHTML = "Y: " + e.pageY;
});

let isBlue = false;
btn.addEventListener("click", (e) => {
  if (!isBlue) div.style.backgroundColor = "lightblue";
  else div.style.backgroundColor = "lightgray";
  isBlue = !isBlue;
});
