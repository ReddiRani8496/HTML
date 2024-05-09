let field = document.getElementById("copyField");
let para = document.querySelector("p");

field.addEventListener("copy", (e) => {
  para.innerHTML = "Text Copied";
});
