//set (collection- unique value)
let val;

var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);//ayni sayi eklemez.
mySet.add('iki')
mySet.add({ a: 1, b: 2 });

var obj = { a: 1, b: 2 };
mySet.add(obj); // adresleri farkli oldugu icin icerik olarak ayni olsada yeni bir obje olarak eklenir

val = mySet.has(1); // true 
val = mySet.has(3); //false
val = mySet.has(obj); //true
val = mySet.size;
mySet.delete(1);


// console.log(val);
// console.log(mySet);

for (let item of mySet) {
    console.log(item);
}

for (let item of mySet.keys()) {
    console.log(item);
}
for (let item of mySet.values()) {
    console.log(item);
}
//setlerde keys ve values ayni seyi ifade ediyor

for (let [key, value] of mySet.entries()) {
    console.log(key, value);
}


console.log(Array.from(mySet));
//array.from ile myseti bir arraye cevirdik

let mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2);


//intersect kesişim

// var intersect = new Set(Array.from(mySet).filter(x => mySet2.has(x)));

var intersect = new Set([...mySet].filter(x => mySet2.has(x)));

console.log(intersect);

//difference farklar

var difference = new Set([...mySet].filter(x=>!mySet2.has(x)))
console.log(difference);