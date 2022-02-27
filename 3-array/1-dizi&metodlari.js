//Arrays

let names = ['cinar', 'sena', 'ada', 'yigit']

let years = [2019, 2001, 2002, 1934]
let mix = ['sadik', 'turan', 1983, null, undefined, ['sinema', 'kitap']]

// // get array item
// console.log(names[0]);
// console.log(names[3]);

// //set array item
// names[names.length]='emel'

// //add item
// years.push(1986)
// years.unshift(1900)

// //remove item
// years.pop() //son eleman silinir
// years.shift()//en bastaki eleman gider

// //indexOf
// let index = names.indexOf('ada')
// console.log('index :'+ index);

// //revers // terse cevirir en bastaki sona gider
// names.reverse()

// //sort //alfabetik olarak siralar sayilari kucukten buyuge dogru siralar
// years.sort()
// names.sort()

// //concat
// let val= years.concat(names)
// console.log(val);

// //splice
// names.splice(2,0,'seda')
// // ['cinar', 'sena', 'seda', 'ada', 'yigit']
// names.splice(0,1)
// // ['sena', 'seda', 'ada', 'yigit']


//find

//filter

function over18(year){
    let age = 2018 - year;
    return age>=18;
}

//let val= years.find(over18);
let val= years.filter(over18);
console.log(val);


console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log('years :'+ years);
// console.log(mix);