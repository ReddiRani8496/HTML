let heading = document.getElementsByTagName("h1");
// console.log(heading[0].innerText);
// console.log(heading[1].innerHTML);
// heading[0].innerHTML = "java";
// console.log(heading[0].innerHTML);

let i = 1;
function change() {
    if(i%2 ==0) {
        heading[0].innerHTML = "Even " + i;
        heading[0].style.backgroundColor="blue";
    } else {
        heading[0].innerHTML = "Odd " + i;
        heading[0].style.backgroundColor="red";
        heading[0].style.textAlign="center";
    }
    i++;
}