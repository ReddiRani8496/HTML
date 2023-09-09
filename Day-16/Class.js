let heading = document.getElementsByClassName("hi");
function changeText() {
    heading[0].innerText = "Mouse moved over";
    heading[0].style.backgroundColor= changeBg();
}
function changeText1() {
    heading[1].innerText = "Mouse moved out";
    heading[1].style.backgroundColor= changeBg();
}

let arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
function changeBg() {
    let color = "#";
    for(let i=0;i<6;i++){
        let randomDigit = parseInt(Math.random() * arr.length);
        color += arr[randomDigit];
    }
    return color;
}