const inputField = document.getElementById("textInput");
const charCountSpan = document.getElementById("charCount");

inputField.addEventListener("input", function () {
  const charCount = inputField.value.length;
  charCountSpan.textContent = charCount;
});
