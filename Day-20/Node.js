let div = document.querySelector('div');
// let p1 = document.querySelector('main');
function addItem() {
    let p = document.createElement('p');
    let node = document.createTextNode('Hello world!!');
    p.appendChild(node);
    div.appendChild(p);
}
// let body = document.querySelector('body');
 let p1 = document.querySelector('#abc');
function insertBefore(){
    let p = document.createElement('p');
    let node = document.createTextNode('Hello world!!');
    p.appendChild(node);
    div.insertBefore(p1,p);
}
function remove(){
    p1.remove();
}


