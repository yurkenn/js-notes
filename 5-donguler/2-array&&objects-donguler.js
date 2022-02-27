// Loops in Array & Objects

let cars = ['Bmw', 'Mercedes', 'Toyota']
let people = [
    { firstName: 'Ada', lastName: 'Bilgi' },
    { firstName: 'yigit', lastName: 'Bilgi' },
    { firstName: 'cinar', lastName: 'turan' },
]

//for loop

// for (let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// for (let i=0; i<people.length; i++){
//     console.log(people[i].firstName);
// }

// for-in

//arrays

// for(let i in cars){
//     console.log(`index: ${i} value: ${cars[i]}`);
// }

// for (let i in people){
//     console.log(`index: ${i} value: ${people[i].firstName}`);
// }

//foreach

// cars.forEach(function(item){
//     console.log(item);
// })

// people.forEach(function(item){
//     console.log(item.firstName);
// })

//map: returns an array

// let val = people.map(function(item){
//     return item.firstName + ' ' + item.lastName
// })

// console.log(val);

let numbers = [1,2,3,4,5,7,8]

let num = numbers.map(function(n){
    return n*n;
})
console.log(num);