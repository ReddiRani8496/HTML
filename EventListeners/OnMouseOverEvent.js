let img = document.querySelector("img");
let src = img.getAttribute("src");
let div = document.querySelector("div");
img.addEventListener("mouseover", () => {
  img.setAttribute("src", "dog1.webp");
});

img.addEventListener("mouseout", () => {
  img.setAttribute("src", "dog.webp");
});
