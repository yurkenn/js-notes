/*
    Demo Loops: Sayi Tahmin Oyunu

    1-10 arasi rastgele sayi uretilen bir sayiyi asagi yukari ifadeleri ile buldurmaya calisin.
    **puanlama yapin
    **kullanici kac kerede bilecegini belirtebilirsin
*/


let hak = 5;
let tahmin, sayac = 0;
let sayi = Math.floor((Math.random() * 10) + 1) //10 ile carparsak 0 ile 10 arasinda sayilar uretir +1 ise 0 gelmesini engeller
can = Number(prompt('kac kerede bileceksiniz ?'))
hak = can;

console.log(sayi);

while (hak > 0) {
    hak--;
    sayac++;
    tahmin = Number(prompt("bir sayi gir"));
    if (sayi == tahmin) {
        console.log(`tebrikler ${sayac} defada bildiniz`);
        console.log(`puan: ${100 - (100 / can) * (sayac - 1)}`);
        break;
    } else if (sayi > tahmin) {
        console.log('yukari');
    } else {
        console.log('asagi');
    }

    if (hak == 0) {
        console.log('hakkiniz bitti. sayi:' + sayi);
    }
}