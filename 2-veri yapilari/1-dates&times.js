// date object 

let d = new Date();
let birthday = new Date(1990, 1, 10)

//Set Methods
d.setFullYear(2020)
d.setMonth(5)
d.setDate(20)
d.setHours(10)
d.setMinutes(31)
d.setSeconds(31)




//Get Methods
console.log(d.getDate()); // metod cagirirken parantez kullan
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());



console.log(d);
console.log(typeof d);
console.log(birthday);
console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());