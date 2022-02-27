// Arrays in ES6

const boxes = document.querySelectorAll('.box');

let boxesES5 = Array.prototype.slice.call(boxes);

// boxesES5.forEach(function(box) {
//     box.style.backgroundColor = 'green'
    
// });

// //ES6
// Array.from(boxes).forEach(box => box.style.backgroundColor="green")

// console.log(boxesES5);

//ES5
// for (let i=0; i<boxesES5.length;i++){
//     if(boxesES5[i].className == 'box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = "i'm changed";
//     boxesES5[i].style.backgroundColur='blue';
// }

//ES6

// let boxesES6 = Array.from(boxes);
// for(let box of boxesES6){
//     if(box.className=='box blue'){
//         continue;
//     }
//     box.textContent='im changed';
//     box.style.backgroundColur ='blue';
// }

//from 

// let arr = Array.from('Modern Javascript')
const products = [
    {name:'samsung s5',price:3000},
    {name:'samsung s6',price:4000},
    {name:'samsung s7',price:6000},
]

//from
console.log(Array.from(products,prd =>prd.name =='samsung s7'));

//find
console.log(products.find(prd=>prd.name=='samsung s7'));

//filter
console.log(products.filter(prd => prd.name=='samsung s7'));

//findIndex
console.log(products.findIndex(prd=> prd.price==4000));

let numbers = ['a','b','c'];

let entries = numbers.entries();

for(let i of entries){
    console.log(i);
}
// //output index numaralari ve eleaman gelir.
// [0, 'a']
// [1, 'b']
// [2, 'c']

let keys = numbers.keys();

for(let i of keys){
    console.log(i);
}
// outout : sadece index numaralari gelir 
// 1
// 2
// 3

let values = numbers.values();
for(let i of values){
    console.log(i);
}
//output : a b c 