// this keyword

//ES5
// let list = {
//     category: 'phone',
//     names: ["Iphone 8", 'samsung 8', 'iphone 7'],
//     call: function () {
//         this.names.map(function (name) {
//             console.log(`${this.category}${name}`);// this.category ile this'in listi temsil etmesini isteriz. liste ulasmaya calistik ama undefined yazdi nedeni ise bir yeni bir fonksiyonun icerisinde olmasi.yeni fonksiyon bizim icin yeni bir context olusturdu 
//         })
//     }
// }

// list.call();

//ES6 

// let list = {
//     category: 'phone',
//     names: ['iphone 8', 'samsung 8', 'iphone 7'],
//     call: function () {
//         this.names.map(name => console.log(`${this.category} ${name}`));
//         // arrow functionlar yeni bir context olusturmadigi icin this ile liste erisim saglariz ve undefined hatasi almayiz.
//     },
// };

// list.call();


//ES5 example;
// function Game() {
//     this.live = 0;
//     this.addLive = function (){
//         var self = this; //es5 te this ile yeni bir fonksyonun disina ulasamadigimiz icin yeni bir obje olusuturup thise tanimlariz. bu sekilde this yerine tanimladigimiz obje ile thise ulasiriz.
//         this.oneUp = setInterval(function(){
//             console.log(++self.live);
//         },1000)
//     }
// }

//ES6 
function Game() {
    this.live = 0;
    this.addLive = function () {
        this.oneUp = setInterval(() => { // arrow function ile thise ulasabiliriz ve yeni bir obje tanimlamamiza gerek kalmaz.
            console.log(++this.live);
        }, 1000)
    }
}


let player = new Game();
player.addLive();