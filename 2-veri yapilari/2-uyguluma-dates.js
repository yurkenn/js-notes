//simdiki tarihin gun ay ve yil bilgisini yazdiriniz

let dt = new Date()

console.log(dt);
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getFullYear());

//tarih ve saat bilgisini iceren bir date objesini olustur
let dtA = new Date('8/24/2010 14:59:10')
console.log(dtA);

let dtB = new Date(2010, 8, 24, 14, 50, 10)
console.log(dtB);

//1/1/1990 tarihinden bir gun oncesini goster
let dtC = new Date('1/1/1990')
var dayOfMonth = dtC.getDate()
dtC.setDate(dayOfMonth - 1)

console.log(dtC);
// Iki tarih arasinda ki gecen zamani bulunuz 
let start = new Date('1/1/1990')
let end = new Date('1/1/1991')

let miliseconds = end - start;
let saniye = miliseconds / 1000;
let dakika = saniye / 60
let saat = dakika / 60
let gun = saat / 24

console.log("miliseconds: " + miliseconds);
console.log("saniye: " + saniye);
console.log("dakika: " + dakika);
console.log("saat: " + saat);
console.log("gun: " + gun);
// Her yil mayin ayinin 2.haftasi pazar gunu kutlanan anneler gunu 2019 yilinda ne zaman kutlanacaktir 

let annelerGunu = new Date();
annelerGunu.setHours(0, 0, 0, 0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while (annelerGunu.getDay() != 0) {
    annelerGunu.setDate(annelerGunu.getDate() + 1)
} //while = iken
annelerGunu.setDate(annelerGunu.getDate() + 7)
console.log(annelerGunu);


//yas hesaplama nasil yapilir 
let birthday = new Date("8/1/1985")
let ageDifMs = Date.now() - birthday.getTime();
let ageDate = new Date(ageDifMs)


console.log(ageDate.getFullYear() - 1970);

// console.log(birthday.getTime());
// console.log(Date.now());