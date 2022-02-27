// numbers 

let val;

// val = Number("10") ;
// val = parseInt('10.5') tam sayi doner 10
// val = parseFloat('10.5')
// val = isNaN('10'); false
// val = isNaN('a10'); treu

// var num = 10.214124
// val = num.toPrecision(2)
// val =num.toFixed(2)//virgilden sonra 2 basamk alir

val = Math.PI //pi sayisi
val = Math.round(2.4)//en yakin sayiya
val = Math.round(2.6)
val = Math.ceil(2.4)// her zaman yukariya
val = Math.ceil(2.6)
val = Math.floor(2.4)//her zaman asagiya
val = Math.floor(2.6)
val = Math.sqrt(64)//karekok
val = Math.pow(2,4)// 2 uzeri 4
val = Math.abs(-2.4)//mutlak degerini alir negatif sayiyi pozitif doner
val = Math.min(2, 22, 3, 5, 64,)//en kucuk sayiyi verir
val = Math.max(2, 22, 3, 5, 64,)//en buyuk sayiyi verir
val = Math.random()//rasgele bir sayi uretir
val = Math.floor(Math.random() * 100+1)


console.log(val);
console.log(typeof val);
