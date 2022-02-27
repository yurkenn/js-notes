const person = {
    firstName: 'Sadik',
    lastName: 'Turan'
    // get fullName() {
    //     return `${this.firstName} ${this.lastName}`
    // },
    // set fullName(value) {
    //     const parts = value.split(' ');
    //     this.firstName = parts[0];
    //     this.lastName = parts[1];
    // }
}

//get ve set islemini object disinda da yapabiliriz 

Object.defineProperty(person,'fullName',{
    get function() {
        return `${this.firstName} ${this.lastName}`
    },
    set function(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person,'age',{
    value:50,
    writable: true // writable set metodunu true oldugunda calistirir ve disarida tanimladigimiz gibi age 50 iken yeni girdigimiz deger olan 55 degerini okur.
})

person.age = 55;


// // person.firstName = 'sena'
// person.fullName = 'Cinar Turan'
// console.log(person.fullName);
console.log(person);