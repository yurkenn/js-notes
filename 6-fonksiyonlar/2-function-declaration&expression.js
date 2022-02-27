//Function Declarations
// function sum(a,b){
//     var c = a+b
//     return c;
// }
// console.log(sum(10,20));




//Function Expressions

const sum = function (a = 0, b = 0) { //bir degisken tanimlayip onun icersinde bir fonksyon olusturuyoruz // ES6 a=0 veya b=0 dersek sayi eksik girilirse NaN hatasi almayiz
    var c = a + b;
    return c;
}

function sumAll() {
    var total = 0;

    for (let i = 0; i < arguments.length; i++) { // arguments ile sumAll'a gonderilen birden cok paremetreye* ulasabiliriz
        total += arguments[i];

    }
    return total;
}

console.log(sum(10, 30)); //40
console.log(sum(10)); // NaN = nat a number degeri doner
console.log(sumAll(10, 23, 45, 32, 43)); //parametreler*