// object literals

// let yigit = {
//     name:'yigit',
//     yearOfBirth: 2010,
//     job:'student'
// }

// name yearofbirth job gibi degerleri birden cok obje icin kullanmak icin bir kalip olusturuyoruz

// function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // yas hesaplamak istersek
//     this.calculateAge = function(){
//         return 2022 - this.yearOfBirth;
//     }
// }

let Person = function(name,yearOfBirth,job){
    this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
     // yas hesaplamak istersek
     this.calculateAge = function(){
         return 2022 - this.yearOfBirth;
     }
}

//olusturdugumuz person fonksiyonu ile yeni bir object yaratip fonksyion icersinde belirlemis oldugumuz kaliplara string veya number degeri atayabiliyoruz ornek:  

let yigit = new Person('yigit',2010,'student');
let emel = new Person('emel',1998,'teacher')

console.log(yigit.name);
console.log(yigit.job);
console.log(yigit.yearOfBirth);
console.log(yigit.calculateAge());
console.log('************************');

console.log(emel.name);
console.log(emel.job);
console.log(emel.yearOfBirth);
console.log(emel.calculateAge());


