// Template Literals

const fullName = 'Sena Turan'
const city = 'Kocaeli'
const yearOfBirth = 1999

let val;

val = 'my name is ' + fullName +
    'I\'m ' + (2018 - yearOfBirth) + 'years old' + 'and I live in' + city

//ternary operator
val =`my name is ${fullName} I'm ${2008-yearOfBirth>=18 ? 'over 18': 'under 18'} and I live in ${city}`

console.log(val);