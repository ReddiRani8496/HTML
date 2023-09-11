let image = document.getElementsByTagName('img')[0];
let button = document.getElementsByTagName('button')[0];
let i =0;
function perform() {
    if(i%2==0) {
        image.src="bulb-on.gif";
        button.innerText="Turn off";
    }
    else{
        image.src="Bulb-off.jpeg";
        button.innerText="Turn on";
    } 
    i++;
}