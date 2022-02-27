// callback functions
let val;

function MultipleByTwo(a, b, c, callback) {
    let arr = [];
    
    // callback ile girilen degerin function olup olmadigindan emin olamk icin bir if kousulu olusturabliriz
    if(callback && typeof callback==='function'){
        for (let i = 0; i < 3; i++) {
            arr[i] = callback(arguments[i] * 2);
        }    
    }
    return arr;
}

function addOne(a) {
    return a + 1;
}
function addTwo(a) {
    return a + 2;
}
function addThree(a) {
    return a + 3;
}

// val = MultipleByTwo(5, 10, 20,addThree); 

//ister fonksiyona isim vererek istersekte anoim bir foksiyon olusturup kullanabliriz ornek:

val = MultipleByTwo(5,10,20,function(a){
        return a+15;
});


// for(let i=0;i<val.length;i++){
//     val[i] = addOne(val[i]);
// }

console.log(val);