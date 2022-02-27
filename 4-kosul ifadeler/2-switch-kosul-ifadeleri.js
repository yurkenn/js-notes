// switch statements

// let category = 'beyaz esya';

// switch (category) {
//     case 'telefon':
//         console.log('telefon categorisi');
//         break;

//     case 'bilgisayar':
//         console.log('bilgisayar kategorisi');
//         break;
//     default:
//         console.log('yanlis kategori');
// }

// let day;

// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         day = "haftasonu"
//         break;

//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         day = "hafta ici"
//         break;

// }

// console.log(`bugun gunlerden ${day}`);

const age = 19;
const firstName = 'sena';
switch (true) {
    case (age > 0 && age <= 12):
        console.log(`${firstName} is child`);
        break;
    case (age >= 13 && age <= 19):
        console.log(`${firstName} is teenager`);
        break;
    default:
        console.log(`${firstName} is an adoult`);
}