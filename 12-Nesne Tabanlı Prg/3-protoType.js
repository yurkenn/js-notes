//Inheritance ...Kalıtım Prototype

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge= function(){
    return 2022 - this.yearOfBirth;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.lastName='turan';

let emel = new Person('emel',1989,'teacher');
let yigit = new Person('yigit',2000,'student');

console.log(emel.calculateAge());
console.log(emel);
console.log(emel.getName());

console.log(yigit.calculateAge());
console.log(yigit);
console.log(yigit.getName());

//emel bunyesine ait bir property olup olmadigina bakariz / false
console.log(emel.hasOwnProperty('lastName'));