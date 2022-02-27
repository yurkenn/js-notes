// if/else statements 

const firstName = 'Sena'
const age = 19;
const isStudent = false
const school = 'high school'

// if (firstName === 'Sena') {
//     console.log('merhaba sena');
// }

// if (age === 19) {
//     console.log('yasiniz 19');
// }

// if(isStudent){
//     console.log('Merhaba ogrenci');
// } else{
//     console.log('merhaba isler nasil');
// }

// if (age >= 18) {
//     if ((school == "university") || (school == 'high school')) {
//         console.log("ehliyet alabilirsiniz");
//     } else {
//         console.log("egitim durumun yetersinz");
//     }
// }

// if (age>0 && age<12){
//     console.log(`${firstName} is a child`);
// } else if (age >=13 && age<=19){
//     console.log(`${firstName} is a teenager`);
// }else {
//     console.log(`${firstName} is an adult`);
// }

//undefined
let id ='12142'

if (typeof id !== 'undefined'){
    console.log('id: '+id);
}else{
    console.log('no id');
}