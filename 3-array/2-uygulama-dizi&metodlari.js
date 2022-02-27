//demo array

//"Bmw,Mercedes,Opel,Mazda" elemanlarina sahip bir dizi olusturun
let arr = ['bmw', 'mercedes', 'opel', 'mazda']
//Dizi kac elemanlidir ?
console.log(arr.length);
// Dizinin ilk ve son elemani nedir ?
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[arr.length - 1]);
// "Renault" degerini dizinin sonuna ekleyin 
arr.push('renault')
console.log(arr);
//"Toyota" degerini dizinin basina ekleyin
arr.unshift("toyota")
console.log(arr);
//"reanault" degerini siliniz
arr.pop()
console.log(arr);
//"toyota" degerini siliniz
arr.shift()
console.log(arr);
//Dizi elemanlarini ters cevirin
arr.reverse()
console.log(arr);
//Dizi elemanlarini alfabetik olarak siralayin
arr.sort()
console.log(arr);
//[1,2,5,80] dizisini siralayin
let newArr = [1, 2, 5, 80]
console.log(newArr.sort());

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.log(newArr.sort(compare));

//"opel" degerini dizinin bir elemanimidir ?
console.log(arr.includes("opel"));

var str = "Chevrolet,Dacia" //Ifadesini diziye ceviriniz
var arr2 = str.split(",")
console.log("arr2:", arr2);

//olusturulan 2 dizinin elemanlarini bir baska dizi ile birlestirin
var arr3 = arr.concat(arr2)
console.log(arr3);
//olusturulan dizien son 2 elemanin sildiniz 
console.log(arr3.splice(4, 2))
console.log(arr3);



//asagida verilen elemanlari bir dizi icerisinde saklayiniz
// studentA : yigit bilgi 2010
// studentB : Sena Turan 1999
// student : Ahmet Turan 1998

let studentA = ['yigit','bilgi',2010]
let studentB = ['sena','turan',1999]
let studentC = ['ahmet','turan',1998]

let students= [studentA,studentB,studentC]


// let students = {
//     std:[
//     { studentA: "yigit bilgi", birthDay: 2010 },
//     { studentB: "Sena Turan", birthDay: 1999 },
//     { studentC: "Ahmet Turan", birthDay: 1998 },
// ]}

console.log(students);