//object literals

let val;

let person = {
    firstName: 'Cinar',
    lastName: 'Turan',
    age: 7,
    hobbies: ['music', 'game'],
    address: {
        city: 'kocaeli',
        country: 'turkey'
    },
    getBirthYear: function () {
        return 2022 - this.age;
    }
}
val = person;
val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person.address['city'];
val = person.getBirthYear();



let people = [
    { firstName: 'cinar', lastName: 'turan' },
    { firstName: 'sena', lastName: 'turan' },
    { firstName: 'seda', lastName: 'turan' },
]

val = people[2]
val = people[2].firstName

for(let i=0; i<people.length; i++){
    console.log(people[i].firstName);
}


// console.log(val);
// console.log(typeof person);