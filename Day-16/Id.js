let heading = document.getElementById('heading');
function changeText() {
    heading.innerText = "Mouse moved over";
    heading.style.backgroundColor= changeBg();
}
function changeText1() {
    heading.innerText = "Mouse moved out";
    heading.style.backgroundColor= changeBg();
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