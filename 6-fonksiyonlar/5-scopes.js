//Scopes

// ** Global Scopes
var name = "Cinar"
var age = 25;
function logName(){
    var name = 'Ada'
    var age ='12'
    console.log('function scope:',name,12);
}
// console.log(age); hata aliriz 
if(true){
    var age = 30;
    console.log('block scope;',name,age);
}
console.log('block disi;',age);

logName();
console.log(name);

// ** Local Scopes

//Fonksyonlar kendi scope'larini olusturur.
//** Block'lar yeni scope olusturmaz.
// ES6 ile gelen let ve const block scope olusturur.
console.log('********************');

if(true){
    var model = 'opel';
    let year = 2016
    const color = 'white'
    console.log('block scope;',model,year,color);
}
console.log(model);
// console.log(year); hata 
// console.log(color); hata 

var i = 1;

for (let i=0; i<10; i++){ 
    console.log('i', i);
}

console.log(i); // global olarak yazdirmak istedigimiz deger 1'dir.Ama for dongusune girdigi icin i 9'a kadar gelir ve yazmak istedigimiz sayinin uzerine eklenir ve sonuc 10 olur. For dongusunde Var yerine Let kullanirsak bir block olusur ve icinde ki deger disari cikamaz. Sonucum bir olur.