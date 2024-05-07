let btn = document.getElementById("btn");
let para = document.getElementById("p1");
let para1 = document.getElementById("p2");
let div = document.querySelector("div");
window.addEventListener("mousemove", (e) => {
  para.innerHTML = "X: " + e.pageX;
  para1.innerHTML = "Y: " + e.pageY;
});

btn.addEventListener("click", (e) => {
  div.style.backgroundColor = "lightblue";
});
