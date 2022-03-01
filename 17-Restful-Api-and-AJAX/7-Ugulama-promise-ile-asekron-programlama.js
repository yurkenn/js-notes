// var p = new Promise((resolve,reject)=>{
//     if(true){
//         resolve('success')
//     }else{
//         reject('failure');
//     }
// })

// p.then((data)=>{
//     console.log(data);
// }).catch(err =>{console.log(err);})

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(5);
//     }, 1000);
// }).then(number=>{
//     console.log(number);
//     return number*number;
// }).then(number=>{
//     console.log(number);
//     return number*number;
// }).then(number=>{
//     console.log(number);
// })

const isMomHappy = true;

const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            name: 'iphone 8',
            price: 4000,
            color: "silver"
        }
        resolve(phone)
    } else {
        const error = new Error('mom is not happy');
        reject(error);
    }
});

const showToFriends = (phone) => {
    const message = "he told his friends this is my new phone " + phone.name;
    return Promise.resolve(message);
}

const askMom = () => {
    willGetNewPhone
        .then(showToFriends)
        .then(message => console.log(message))
        .catch(error => { console.log(error);})
}

askMom();