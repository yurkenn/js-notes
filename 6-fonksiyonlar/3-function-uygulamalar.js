// Demo : Functions

let hesapA = {
    ad: 'Sena Turan',
    hesapNo: '12314',
    bakiye: 2000,
    ekHesap: 1000
}

let hesapB = {
    ad: 'Emel Turan',
    hesapNo: '234234',
    bakiye: 3000,
    ekHesap: 2000
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);
    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log('paranizi alabilirsiz');
    }else{
        var toplam = hesap.bakiye + hesap.ekHesap;
        if(toplam >= miktar){
            if(confirm('ek hesabinizi kullanmak istermisiniz ?')){
                console.log('paranizi alabilirsiniz');
                var bakiye = hesap.bakiye
                var ekHesap= miktar -bakiye
                hesap.bakiye=0
                hesap.ekHesap=hesap.ekHesap-ekHesap
            }else{
                console.log(`${hesap.hesapNo} nolu hesabinizda ${miktar} bulunmamaktadir`);
            }
        }else{
            console.log('uzgunuz bakiye yetersiz');
        }
    }
}

paraCek(hesapA,2000)
paraCek(hesapA,1000)
// paraCek(hesapB,2000)