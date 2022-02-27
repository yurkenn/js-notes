// Local Storage ** tarayici kapansa dahi bilgiler kayit olur.
let val;

//set item
const firstName = localStorage.setItem('firstName','Oguz')
const lastName = localStorage.setItem('lastName','Yurken')
let hobies = ['sinema','araba','gezmek']

//get item
val = localStorage.getItem('firstName')
val = localStorage.getItem('lastName')

// //remove item
// localStorage.removeItem('firstName')
// localStorage.removeItem('lastName')

//clear ** butun elemanlar silinir
// localStorage.clear()

//set array to storage
// localStorage.setItem('hobies',hobies)
localStorage.setItem('hobies',JSON.stringify(hobies)) //string ifadayi arraye donusturmek icin Json.stringify kullaniriz

// get array from storage
val= JSON.parse(localStorage.getItem("hobies"))

console.log(val);
console.log(localStorage);



//Session Storage **tarayici kapandiginda bilgiler kaybolur
// const city = sessionStorage.setItem('city','kocaeli')
// const country = sessionStorage.setItem('country','turkiye')


// console.log(sessionStorage);