let input = document.querySelector('input');
let items=[];
function addItem() {
    let value = input.value;
    items.unshift(value);
    dispalyItems();
}
function dispalyItems() {
    let ol = document.querySelector("ol");
    ol.innerText="";
    for(let i=0;i<items.length;i++) {
        let li = document.createElement('li');
        let node = document.createTextNode(items[i]);
        li.appendChild(node);
        ol.appendChild(li);
    }
}