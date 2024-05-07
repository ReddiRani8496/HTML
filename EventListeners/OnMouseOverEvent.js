let img = document.querySelector("img");

img.addEventListener("mouseover", () => {
  img.setAttribute("src", "dog1.webp");
});

img.addEventListener("mouseout", () => {
  img.setAttribute("src", "dog.webp");
});
