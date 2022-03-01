// function fn() {
//     return Promise.resolve("hello")
// }

// async function fn() {
//     return "hello"
// }

//async ile isaretledigimiz fonksiyon bize promise donduruyor.

// console.log(fn());
// Promise {<fulfilled>: 'hello'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "hello"

// fn().then(res=>console.log(res))

var isError = true;

function getCategory() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isError) {
                resolve('phone')
            } else {
                reject('error')
            }
        }, 1000);
    });
}

function getProducts(category) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`5 products in ${category}`)
        }, 1000);
    });

}

getCategory()
    .then(getProducts)
    .then(res => console.log(res))
    .catch(err => console.log(err))

async function getProduct() {

    try { // hata olabilicek islemler try icine girilir
        let category = await getCategory(); //await ile islem gereceklesene kadar bekletiriz islem gerceklestikten sonra diger isleme gecer
        let result = await getProducts(category); // awaiti kullanabilmek icin async function icerisinde olmak zorunda

        console.log(result);
    } catch (error) { // eger hata varsa reject ile yakalanir 
        console.log(error);
    }

}

getProduct();