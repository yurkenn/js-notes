// Traversing the DOM

let val;

let list = document.querySelector('.list-group')

val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; //text
val = list.childNodes[1].nodeType; // element
// eger nodeType 1 donuyorsa element, 2 donuyorsa,attribute , 3 donuyorsa text oldugu anlamina gelir.Eger 8 donuyorsa bir yorum satirina ulastik demektir.
val = list.children
val = list.children[0]
val = list.children[2]
val = list.children[2].textContent = 'new item'
val = list.children[3].children

val = list.firstChild
val = list.firstElementChildt

val = list.lastChild
val = list.lastElementChild

val = list.childElementCount

val = list.parentNode // ulastigimz liste ul. ul'nin icinde bulundugu eleman <div class='card mt-3'> bu divin icinde baska divler ve ulde var. iclerindeki elelmanlar sibling/kardes. ana divimizde parent yani ebeveyn oluyor.
val = list.parentElement
val = list.parentElement.parentElement

val = list.children[0].nextSibling
val = list.children[0].nextElementSibling // bir sonraki eleman 1'e gider

val = list.children[1].previousSibling
val = list.children[1].previousElementSibling // bir onceki elemani 0'a gider

// console.log(val);

for (let i = 0; i < list.childNodes.length; i++) {
    if (list.childNodes[i].nodeType === 3) {
        console.log(list.childNodes[i]);
    }
}



