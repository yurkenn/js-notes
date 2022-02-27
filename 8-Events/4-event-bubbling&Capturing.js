// Event Bubbling icten disa dogru aktarim 
//bunu engellemek icin functiona bir event atiyoruz ve functin icine event.stopPropagation() yaziyoruz

const form = document.querySelector('form')
const cardBody = document.querySelector('.card-body')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

form.addEventListener('click', function (e) {
    console.log('form');
    e.stopPropagation()
})
form.addEventListener('click', function (e) {
    console.log('card body');
    e.stopPropagation()
})
form.addEventListener('click', function (e) {
    console.log('card');
    e.stopPropagation()
})
form.addEventListener('click', function (e) {
    console.log('container');
    e.stopPropagation()
})

//Event Capturing // distan ice dogru // bunu engellemek icin function bittikten sonra ,true yaziyoruz


form.addEventListener('click', function (e) {
    console.log('form');
    e.stopPropagation()
}, true)
form.addEventListener('click', function (e) {
    console.log('card body');
    e.stopPropagation()
}, true)
form.addEventListener('click', function (e) {
    console.log('card');
    e.stopPropagation()
}, true)
form.addEventListener('click', function (e) {
    console.log('container');
    e.stopPropagation()
}, true)


//

const deleteItems = document.querySelector('.fa-times')

deleteItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        console.log(e.target);
    })
})

const ul = document.querySelector('ul')
ul.addEventListener('click', function (e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
        e.preventDefault();
    }
})
