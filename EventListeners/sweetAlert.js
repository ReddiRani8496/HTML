let button = document.getElementById("sucess");
button.addEventListener("click", showSuccessMessage);
function showSuccessMessage() {
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
}

let button2 = document.getElementById("error");
button2.addEventListener("click", showErrorMessage);
function showErrorMessage() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>',
  });
}
