var a = 10;
var b = a;

console.log(a);
console.log(b);


var obj1 = {
    name: 'ada',
    age: 10
}

var obj2 = obj1; //obj2 ve obj1 esitledik
obj1.age = 12; // obj1.age degerini 12 yaptik obj2 10 olmasini bekleriz Ama objeler adres bilgisi tuttugundan bir degisiklik yapildiginda adress bilgisinde tutulan bilgiler uzerinde degisilik yapar. Obje esitlemesi yaptigimizda adres esitlemisi yapmis oluruz.

console.log(obj1.age);
console.log(obj2.age);

var num = 50;
var account = {
    name: 'yigit',
    accountNumber :'12134'
}
function update(a,b){
    a = 100;
    b.accountNumber='22222'
}
update(num,account);

console.log(num);
console.log(account);

var products = [
    {name: 'product name',price: 1000},
    {name: 'product name',price: 1000},
    {name: 'product name',price: 1000},
    {name: 'product name',price: 1000},
    {name: 'product name',price: 1000},
]

function filterProducts(prd){

}

filterProducts(products);