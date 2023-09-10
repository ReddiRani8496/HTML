let image = document.getElementsByTagName('img')[0];
let i = 0;
function change() {
    if(i%2==0)
        image.src = "./like.png";
    else
        image.src = "./thumbs-up.png";
    i++;
}

