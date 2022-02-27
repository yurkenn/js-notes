var models = [
    {
        name: 'Bmw 116d',
        image: '116d.jpg',
        link: "https://arbstorage.mncdn.com/ilanfotograflari/2022/01/01/19123100/da169316-a7c1-4db5-860e-69e9b4d2a7d2_image_for_silan_19123100_580x435.jpg"
    },
    {
        name: 'Volvo S60',
        image: 's60(1).jpg',
        link: "https://tr.motor1.com/volvo/s60/"
    },
    {
        name: 'Mazda CX-3',
        image: 'cx3.jpg',
        link: "https://tr.motor1.com/news/265267/yeni-mazda-cx-3-soylentiler/"
    },
    {
        name: 'Skoda Superb',
        image: 'superb(1).jpg',
        link: "https://www.dogusoto.com.tr/superb-3v3"
    },
    {
        name: 'Honda Civic',
        image: 'civic.jpg',
        link: "https://www.otokokpit.com/2019-model-honda-civic-sedan-turkiye-fiyati-ve-ozellikleri/"
    },
];


var index = 0;
var slaytCount = models.length; //modelsin toplam uzunlugunu almak icin bir degisken olusturduk.sahip oldugumuz index sayisini buraya atadik.

showSlide(index);

// arrow keylere click eventi ekliyoruz
//left arrow
document.querySelector('.fa-circle-arrow-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
})

//right arrow
document.querySelector('.fa-circle-arrow-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);
})

//
function showSlide(i) {

    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    // aldigimiz index no lu aracin adini yazdirdik
    document.querySelector('.card-title').textContent = models[index].name

    //aldigimiz index nolu aracin resmini gosterdik
    document.querySelector('.card-img-top').setAttribute('src', models[index].image)

    //aldigimiz aracin linkini koyduk
    document.querySelector('.card-link').setAttribute('href', models[index].link)

}



