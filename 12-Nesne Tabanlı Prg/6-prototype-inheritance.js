// prototypal inheritance

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2022 - this.yearOfBirth;
}

let Teachher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job)
    // ayni islemleri yapmak yerine Person nesnesinde hali hazirda bulunan ozellikleri .call ile cagiriyoruz
    this.subject = subject;
}


// inherit the person prototype methods
Teachher.prototype = Object.create(Person.prototype);

//set Teacher Constructor
Teachher.prototype.constructor = Teachher;

Teachher.prototype.greeting = function(){
    return 'helle my name is'+ this.name;
}

let emel = new Teachher('emel',1989,'teacher','math');

console.log(emel);
console.log(emel.calculateAge());
