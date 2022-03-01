var products = [
    { id: 1, name: "samsung s8", price: 3000 },
    { id: 2, name: "samsung s7", price: 2000 },
    { id: 3, name: "samsung s6", price: 1000 },
]



function addProduct(prd) {

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            products.push(prd);
            let added = false;
            if(added){
                resolve();
            }else{
                reject('hata: 500');
            }
        },);


    });

}

function getProducts() {
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        })
    }, 1000);
}

addProduct({id:4,name:'samsung S5',price:500},)
.then(getProducts)
.catch(err=>{console.log(err);})
