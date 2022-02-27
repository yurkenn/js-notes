//object.create

let personProto = {
    calculateAge: function(){
        return 2022- this.yearOfBirth;
    }
}

let yigit = Object.create(personProto);

yigit.name = 'yigit';
yigit.yearOfBirth = 2010;
yigit.job = 'student';

let emel = Object.create(personProto,{
    name: {value: 'emel'},
    yearOfBirth:{value: 1989},
    job: {value: 'student'}
});

console.log(yigit);
console.log(yigit.calculateAge());

console.log(emel);
console.log(emel.calculateAge());