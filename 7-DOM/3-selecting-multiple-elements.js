// Selecting Elements

//Single Elements
// document.getElementById()
// document.querySelector()

//Multiple Elements

// class name
// document.getElementsByClassName()

let val;

 val = document.getElementsByClassName('list-group-item')
// val = document.getElementsByClassName('list-group-item')[0] // sadece ilk eleman
// val = document.getElementsByClassName('list-group-item')[2] // sadece 2 numarali eleman

// val = val[2]

// val[1].style.color ="blue"
// val[1].style.fontSize ="25px"
// val[2].textContent ="yarrak"

// for (let i=0; i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='red');
// }

// document.getElementsByTagName()

// val = document.getElementsByTagName('li')
// val = document.getElementById('task-list') //ul nesnesini id'si ile aldik
// val = val.getElementsByTagName('a') // ul icindeki a nesnelerini aldik

// val = document.getElementById('task-list').getElementsByTagName('a') // yukaridaki islemin kisa hali

// document.querySelectorAll()

// val = document.querySelectorAll('li');// queryselectorAll NodeList olarak doner ve Nodelist ile forEach kullanip tum elemanlara ulasabilirz.

// val.forEach(function(item,index){
//     item.textContent=`${index} - hello`
// })

val = document.querySelectorAll('li:nth-child(odd)') //nth child odd ile sadece tekil olanlarina ulasiriz even dersek cift olanlari secer
val.forEach(function(item){
    item.style.background='#ccc'
})
console.log(val);