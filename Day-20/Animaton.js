let i = 50;
let div = document.querySelector('div');
setInterval(()=>{
    if(i==200)
        return;
    div.style.margin=i+"px";
    i+=20;
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    div.style.backgroundColor=`rgb(${r},${g},${b})`;

},1000);