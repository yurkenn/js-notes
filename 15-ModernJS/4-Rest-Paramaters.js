// rest parameters 

//es5

function sum(){
    let arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    let result = 0;

    arr.forEach( function(item){ 
        result += item
        
    });
    return result
}

//console.log(sum(10,20,30));

//ES6 

function sumES6(...arr){
    let result = 0;
    arr.forEach(item => {
        result += item
        return result;    
    });
}

console.log(sum(10,20,30,40));

//ES6 ornek

function isDriver(age,...years){ // rest parametresi her zaman en sonda olmali/ eger age rest parameterstan sonra olsaydi age'in alacagi degeri bulamazdi. ama en basa yazip virgil koyduktansona rest paremetersi yazarsak age ilk degeri alir ve kalan degerler rest parametersa aktarilir.
    years.forEach(year => console.log(2018-year>=age));
}
// 17 age olarak tanimlanr, geri kalan degerler rest parametersa aktarilir.
isDriver(17,1990,2002,1983,2005)