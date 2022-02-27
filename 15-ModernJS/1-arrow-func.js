// Arrow Functions

// ES5
let welcomeES5 = function () {
    console.log('Hi from ES5');
}

welcomeES5();

// ES6 

let welcomeES6 = () => { // tek bir satir varsa suslu paranteze gerek yok
    console.log("Hi from ES6");
}
welcomeES6();

// with parameters

//ES5
let multiplyES5 = function (x, y) {
    return x * y;
}
console.log(multiplyES5(10, 5));

//ES6
let multiplyES6 = (x, y) => x * y; //yada
// let multiplyES6 = (x,y) => {return x*y};
console.log(multiplyES6(10, 5));

//ES5
let splitES5 = function (text) {
    return text.split(' ');
}
console.log(splitES5('Moder Js kursu'));
//ES6 
let splitES6 = text => text.split(' ');
console.log(splitES6('modern js kursu'));

//object literals

//ES5
let getProductES5 = function (id, name) {
    return {
        id: id,
        name: name,
    }
}
console.log(getProductES5('1', 'samsung s8'));
//ES6
let getProductES6 = (id, name) => (
    {
        id: id,
        name: name
    }
)

console.log(getProductES6('1', 'samsun s6'));

//
const phones = [
    { name: 'iphone 4', price: 4000 },
    { name: 'iphone 3', price: 3000 },
    { name: 'iphone 2', price: 2000 },
    { name: 'iphone 1', price: 1000 },
];

//ES5
let pricesES5 = phones.map(function (phone) {
    return phone.price;
})

console.log(pricesES5);
//ES6
let pricesES6 = phones.map(phone => phone.price);
console.log(pricesES6);


const arr = [1, 2, 3, 4, 5, 7, 10, 20, 30, 40, 50, 60, 70, 99]

//ES5
let evenES5 = arr.filter(function (a) {
    return a % 2 == 0;
});
console.log(evenES5);
//ES6 
let evenES6 = arr.filter(a => a % 2 == 0);