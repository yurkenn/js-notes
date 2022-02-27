// maps key/ value pairs  collectiob

let val;

const  numbers = new Map();
numbers.set(1,'one');
numbers.set('2','two');
numbers.set(3,'three');
numbers.set('four','four');

val=numbers

//get
val = numbers.get(1);// output : one 
val = numbers.get("2");// output : two 

//size
val = numbers.size; // output:4 

//has
val = numbers.has(1);  // true

//delete
numbers.delete('four')
val = numbers.has('four');  //false

// numbers.clear() // tum elemanlari sifirlar
console.log(val);

//key,value
for(var [key,value] of numbers){
    console.log(key + ' = ' + value);
}
//entries
for(var [key,value] of numbers.entries()){
    console.log(key + ' = ' + value);
}
//keys
for(var key of numbers.keys()){
    console.log(key);
}
//values
for(var value of numbers.values()){
    console.log(value);
}
//forEach
numbers.forEach(function(key,value){
    console.log(key + ' - '+value);
})

var first = new Map ([
    [1,'one'],
    [2,'two'],
    [3,'three'],
]);

var second = new Map([
    [4,'four'],
    [5,'five'],
])

var merged = new Map([...first,...second]);

console.log(merged);