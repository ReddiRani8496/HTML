let body = document.getElementsByTagName("body")[0];
let arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
function changeBg() {
    let color = "#";
    for(let i=0;i<6;i++){
        let randomDigit = parseInt(Math.random() * arr.length);
        color += arr[randomDigit];
    }
    body.style.backgroundColor=color;
    console.log(color);

}