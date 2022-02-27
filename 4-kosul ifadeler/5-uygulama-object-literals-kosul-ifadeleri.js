/* Asagidaki object literal yapisini kullanarak en az 5 arac bilgisini tutunuz

Arac bilgileri:

    id: bmw116d_1234
    model:116d
    yil: 2015
    renk: white
    servis kayitlari:
        id: bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ucret : 900
            servis detayi:
            id : 1 islem : yag degisim ucret : 300
            id : 2 islem : filtre degisimi : 300
            id : 3 islem : fren hidroligi : 300

        id: bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ucret : 1800
            id: 1 islem : yag degisimi ucret : 350
            id: 2 islem : filtre degisimi : 350
            id: 3 islem : fren hidroligi : 300
            id: 3 islem : balata degisimi : 800

*/

let aracBilgileri = [
    {
        id: 'bmw116d_1234',
        model: '116d',
        yil: 2015,
        renk: 'white',
        servis_kayitlari: [
            {
                id: 'bmw116d_1234_1',
                tarih: '30/01/2016',
                km: 13000,
                ucret: 900,
                detay: [
                    { id: 'bmw116d_1234_1_1', aciklama: 'yag degisimi', ucret: 300 },
                    { id: 'bmw116d_1234_1_2', aciklama: 'filtre degisimi', ucret: 300 },
                    { id: 'bmw116d_1234_1_3', aciklama: 'fren hidroligi', ucret: 300, },
                ]
            },
            {
                id: 'bmw116d_1234_2',
                tarih: '30/01/2017',
                km: 28000,
                ucret: 1800,
                detay: [
                    { id: 'bmw116d_1234_2_1', aciklama: 'yag degisimi', ucret: 350 },
                    { id: 'bmw116d_1234_2_2', aciklama: 'filtre degisimi', ucret: 350 },
                    { id: 'bmw116d_1234_2_3', aciklama: 'fren hidroligi', ucret: 300 },
                    { id: 'bmw116d_1234_2_4', aciklama: 'balata degisimi', ucret: 800 },
                ]
            },
    
        ]
    },
    {
        id: 'auidi_a8_22',
        model: 'a8',
        yil: 2020,
        renk: 'white',
        servis_kayitlari: [
            {
                id: 'auidi_a8_22_1',
                tarih: '30/01/2016',
                km: 13000,
                ucret: 900,
                detay: [
                    { id: 'auidi_a8_22_1_1', aciklama: 'yag degisimi', ucret: 300 },
                    { id: 'auidi_a8_22_1_2', aciklama: 'filtre degisimi', ucret: 300 },
                    { id: 'auidi_a8_22_1_3', aciklama: 'fren hidroligi', ucret: 300, },
                ]
            },
            {
                id: 'auidi_a8_22_2',
                tarih: '30/01/2017',
                km: 28000,
                ucret: 1800,
                detay: [
                    { id: 'auidi_a8_22_2_1', aciklama: 'yag degisimi', ucret: 350 },
                    { id: 'auidi_a8_22_2_2', aciklama: 'filtre degisimi', ucret: 350 },
                    { id: 'auidi_a8_22_2_3', aciklama: 'fren hidroligi', ucret: 300 },
                    { id: 'auidi_a8_22_2_4', aciklama: 'balata degisimi', ucret: 800 },
                ]
            },
    
        ]
    },
    {
        id: 'ford_22_focus',
        model: 'focus22',
        yil: 2022,
        renk: 'white',
        servis_kayitlari: [
            {
                id: 'ford_22_focus_1',
                tarih: '30/01/2016',
                km: 13000,
                ucret: 900,
                detay: [
                    { id: 'ford_22_focus_1_1', aciklama: 'yag degisimi', ucret: 300 },
                    { id: 'ford_22_focus_1_2', aciklama: 'filtre degisimi', ucret: 300 },
                    { id: 'ford_22_focus_1_3', aciklama: 'fren hidroligi', ucret: 300, },
                ]
            },
            {
                id: 'ford_22_focus_2',
                tarih: '30/01/2017',
                km: 28000,
                ucret: 1800,
                detay: [
                    { id: 'ford_22_focus_2_1', aciklama: 'yag degisimi', ucret: 350 },
                    { id: 'ford_22_focus_2_2', aciklama: 'filtre degisimi', ucret: 350 },
                    { id: 'ford_22_focus_2_3', aciklama: 'fren hidroligi', ucret: 300 },
                    { id: 'ford_22_focus_2_4', aciklama: 'balata degisimi', ucret: 800 },
                ]
            },
    
        ]
    }
];

console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].renk);
console.log(aracBilgileri[0].servis_kayitlari);
console.log(aracBilgileri[0].servis_kayitlari[0]);
console.log(aracBilgileri[0].servis_kayitlari[0].km);
console.log(aracBilgileri[0].servis_kayitlari[0].ucret);
console.log(aracBilgileri[0].servis_kayitlari[0].detay[0]);
console.log(aracBilgileri[2].servis_kayitlari[0].detay[0]);






