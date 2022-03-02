// 1) Global varibale naming conflicts // isimlendirme cakismasi

// script.js
// var name  = 'sadik';

// //app.js
// var name = 'cinar'

// console.log(name);

//2) Encapsulation 

// var Counter = {
//     number: 0,
//     increment:function(){
//         return ++this.number;
//     },
//     decrement: function(){
//         return --this.number;
//     }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10;
// console.log(Counter.decrement());

//IIFE (immediately invoked function expressions)
//birbirini ezmez nereden geldigi onemli degildir ikiside calisir
//script.js
// (function(){
//     var name = "sadik";
//     console.log(name);    
// })();

// //app.js
// (function(){
//     var name = "cinar";
//     console.log(name);    
// })();


// var Module = (function(){
//     //private members
//     let number=0;
//     let increment= function(){
//         return ++number;
//     }
    
//     let decrement = function(){
//         return --number;
//     }

//     return{
//         //public members
//         increment, // bu sayade disaridan increment ve decrementa ulasabliriz. 
//         decrement
//     }
// })();

// // console.log(number);
// console.log(Module.increment());
// console.log(Module.increment());
// console.log(Module.decrement());

var Module = (function(){
    var privateMethod = function(){

    };

    return{
        publicMethod : function(){

        }
    }
})();

Module.publicMethod();