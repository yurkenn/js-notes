//functions

function yasHesapla(dogumYili) {
    return 2018 - dogumYili;

}

let ageAda = yasHesapla(2011)
let ageYigit = yasHesapla(2000)
let ageCinar = yasHesapla(1993)

console.log(ageAda, ageYigit, ageCinar);

function EmeklilegeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if (emeklilik > 0) {
        console.log(`${isim} Emekli olmaniza ${emeklilik} yil kaldi`);

    } else {
        console.log('Zaten emekli oldunuz');
    }
}

EmeklilegeKacYilKaldi(2011,'Ada')
EmeklilegeKacYilKaldi(2000,'Yigit')
EmeklilegeKacYilKaldi(1903,'Cinar')