var num = 15.1241513;

// toplamda 3 basamkli sayi kullan
console.log(num.toPrecision(3))

//ondalik kismi 3 basamkta sinirla
console.log(num.toFixed(3));
// en yakin sayiya yuvarla
console.log(Math.round(num))

//asagi yuvarla
console.log(Math.floor(num));
//yukari yuvarla
console.log(Math.ceil(num));
//1,2,10,56,20 sayilarindan en kucugu ve en buguyunu bul
console.log(Math.max(1, 2, 10, 56, 20));
console.log(Math.min(1, 2, 10, 56, 20));

// sayi aralaligini kullanicin belirleyecegi rastgele bir sayi uretin
var min = 50;
var max = 100;
console.log(Math.floor(min+Math.random()*(max-min)));

//bir personelin yaptigi mesaiye gore aldigi maasi hesaplayalim
//burut maas:3700tl
//burut mesai:10.3tl
//agustos ayi mesai toplami 42 saat ise toplam burut maas nedir?burut maas uzerinden toplam kesinti orani %25 ise alinacak toplam net maas nedir ?

var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi =42;

var toplamBurutMaas = brutMaas + (mesaiUcreti*mesaiSuresi);

var toplamNetMaas= toplamBurutMaas-toplamBurutMaas*0.25

console.log(toplamBurutMaas,toplamNetMaas.toFixed(0));