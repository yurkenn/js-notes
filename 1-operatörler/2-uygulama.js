//Demo ; Operators

//1= can ve adanin boy ve kg bilgilerini alin
//2= alinan bilgilere gore kile indekslerini hesaplayiniz
//Formul= kisinin kilosu/ boy uzunlugunun karnesi
//3= Hesaplanan indeks bilgisine gore karsilastirma yapiniz
//4= Asagida tabloya gore can ve ada hangi gruba giriyor

//0- 18.4; Zayif
//18.5 - 24.9; Normal
//25.0 - 29.9; Fazla kilolu
//30,0 - 34,9; Sisman 

let IndexCan;
let IndexAda;

const kgCan = 90;
const kgAda = 40;

const heightCan = 1.8;
const heightAda = 1.50;

IndexAda = (kgAda) / (heightAda*heightAda)
IndexCan= (kgCan) / (heightCan*heightCan)

console.log('Adanin Indeksi',IndexAda.toFixed(2),'Canin indeksi', IndexCan.toFixed(2));

let adaHigherIndex = IndexAda > IndexCan
let canHigherIndex = IndexCan > IndexAda 

console.log('Adanin indeksi canin indeksinden daha buyuk :',adaHigherIndex);

console.log('Canin indeksi adanin indeksinden daha buyuk :',canHigherIndex);

let adaZayif = (IndexAda>=0) && (IndexAda<=18.4);

let adaNormal = (IndexAda>=18.5) && (IndexAda<=24.9)

let adaKilolu = (IndexAda>=25) && (IndexAda<=29.9)

let adaSisman = (IndexAda>=30) && (IndexAda<=34.9)

console.log("ada zayif",adaZayif);
console.log("ada normal",adaNormal);
console.log("ada kilolu",adaKilolu);
console.log("ada sisman",adaSisman);