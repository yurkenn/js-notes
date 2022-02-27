// Strings

const firstName = 'sadik'
const lastName = 'turan'
let hobbies = 'sinema,spor,kitap,yazilim'
const age = 35

let val;

//string concatenation

val = firstName + " " + lastName;
val = 'sadik'
val += ' turan'

val = 'Benim adim ' + firstName + " " + lastName + 've yasim ' + age + ' izmit\'te yasiyorum'

//sting concat

val = firstName.concat(' ', lastName);

//string length
// val = val.length 

//string uppercase ve lowercase
val = val.toUpperCase()
val = val.toLowerCase()

//string replace
val = ' ' + val.replace('sadik', 'cinar') + ' '

//trim // yukarida basta ve sonra biraktigimiz bosluklari sileriz trim ile
val = val.trim()


// //substring
// val = val.substring(3,8)

// //slice
// val=val.slice(0,5)
// val = val.slice(5)

// val = val.indexOf('x') //-1 doner bu string ifadenin olmadigini gosterir

// val = val[1]

//split //string ifade objeye dondu
val = hobbies.split(',')

console.log(val);
console.log(typeof val);
