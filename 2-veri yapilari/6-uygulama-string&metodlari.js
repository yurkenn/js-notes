//demo strings 

var sentence = " Template literals or template trings is the ability have multi-line strings without any funy business. ";

var url = "http://sadikturhan.com/Modern Javascript kursu sifirdan ileri seviye"

//cumle kac karekterlidir?
console.log(sentence.length);

//kac kelimeden olusuyor?
console.log(sentence.trim().split(' '));
//tum cumleyi kucuk harfe cevirin
console.log(sentence.toLowerCase());
//cumlenin basindaki ve sonundaki bosluklari siliniz
console.log(sentence.trim());
//'-' karekterini silin
console.log(sentence.replace('-', ''));
//url icindeki str kismini cikariniz
var str = "http://"
console.log(url.substring(str.length));
console.log(url.slice(str.length));
//url hangi protoculu kullanmaktadir ?
console.log(url.startsWith("http"));
console.log(url.startsWith("https"));
//url , ".com" ifadesini iceriyormu
console.log(url.indexOf('.com'));
console.log(url.includes(".com"));
//url string ifadesini gecerli bir url olarak duzenleyiniz
console.log(url.toLowerCase()
    .replace(/ /g, '-')
    .replace(/ı/g, 'i')
    .replace(/ü/, 'u')
    .replace(/ö/, 'o')
    .replace(/ş/, 's')
);