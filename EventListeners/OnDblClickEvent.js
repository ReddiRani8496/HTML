let div = document.querySelector(".container");
// div.addEventListener("dblclick", (e) => {
//   div.style.backgroundColor = "blue";
//   div.style.width = "100%";
//   div.style.height = "100vh";
// });

let isBlue = true;
div.addEventListener("click", (e) => {
  if (!isBlue) {
    div.style.backgroundColor = "blue";
    div.style.width = "100%";
    div.style.height = "100vh";
  } else {
    div.style.backgroundColor = "lightsalmon";
    div.style.width = "300px";
    div.style.height = "300px";
  }
  isBlue = !isBlue;
});
