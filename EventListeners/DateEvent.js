let btn = document.querySelector("button");
let para = document.querySelector("p");
btn.addEventListener("click", () => {
  para.innerHTML = Date();
});
