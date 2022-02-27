// selecting elements


// ** Single elements

//document.getElementByID() metodu
// let val;

// val = document.getElementById('header')
// val = document.getElementById('header').id
// val = document.getElementById('header').className

// val = document.getElementById('header')
// // val = val.id
// // val = val.className

// val.style.fontSize='45px'
// val.style.color='red'
// val.style.fontWeight='bold'
// // val.style.display='none'

// val = document.getElementById('header').innerText='my ToDo App'
// val = document.getElementById('header').innerText='<b>my ToDo App</b>' //<b></b> yazi olarak gozukur innerText kullandigimiz zaman
// val = document.getElementById('header').innerHTML='<b>my ToDo App</b>'

// console.log(val);

// document.querySelector()
console.log(document.querySelector("#header"));
console.log(document.querySelector(".card-header"));
console.log(document.querySelector("div")); //buldugu ilk divi getirir

document.querySelector('li').style.color = 'red'//ilk buldugu li yi kirmizi renk yapar
document.querySelector('li:last-child').style.color = 'red' // son li yi kirmizi renk yapar
document.querySelector('li:nth-child(2)').style.color = 'yellow' // nth ile sectigimiz siradaki elemani sari renk yapar
document.querySelector('li:nth-child(3)').textContent='task item' // nth ile sectigimiz 3. elemana textContent ile 'task item' yazisini yazdiririz.
 
document.querySelector('li').className='list-group-item' // className ile var olan clasin adini degistirebiliriz
document.querySelector('li').classList.add('btn'); // classList ile yeni bir class ekleriz.

// ** Multiple Elements