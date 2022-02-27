// String 

var str1 = 'Sadik';
var str2 = new String('Sadik');

console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

if (str2 === 'Sadik'){ //no doner cunku "Sadik" string bir ifade ama str2 object. 
    console.log('yes');
}else {
    console.log('no');
}

String.prototype.repeat = function(n){
    return new Array(n+1).join(this);
}

console.log('sadik'.repeat(2));//repeat ile tekrarlanmasini istegimiz kadar sayi degeri gireriz

//Number 

var num1=10;
var num2 = new Number (10);

//Boolean

var bool1 = true;
var bool2 = new Boolean(true);

//Object

var obj1 = {
    name : 'sadik'
};

var obj2 = new Object({
    name: 'sadik'
});

// Array

var arr1 =['ada','yigit','sena','cinar'];
var arr2 = new Array('ada','yigit','sena','cinar');

Array.prototype.remove = Array.prototype.remove || function(member){
    var index = this.indexOf(member);

    if(index > -1){
        this.splice(index,1);

    }
    return this;
}

console.log(arr1.remove('sena'));