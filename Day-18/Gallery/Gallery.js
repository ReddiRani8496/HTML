let i = 0;
let image = document.getElementsByTagName('img')[0];
function previous() {
    i--;
    image.src=i+".gif";
    change();
}
function next() {
    i++;
    image.src=i+".gif";
    change();
}

function change() {
    if(i==1)
        document.getElementById('prev').disabled=true;
    else
        document.getElementById('prev').disabled=false;
    if(i==8)
        document.getElementById('next').disabled=true;
    else
        document.getElementById('next').disabled=false;
}