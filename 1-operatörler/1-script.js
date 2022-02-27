// operatorler 
let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3;
// 1- aritmetik operatorler

val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = d++;
val = ++d;
val = --d;
val = d--;

//2- Atama operatorleri

val = a;
val += a; //val = val + a
val -= a; //val = val - a
val *= a; //val = val * a
val /= a; // val = val / a

// 3 karsilastirma operatorleri /boolean

val = a == b; //fasle doner
val = b == c;
val = a === b; //deger kontrolu & type
val = 5 === "5" // false doner type olarak farkli
val = a != b;
val = a > b;
val = b < a;
val = a >= b;
val = 4 >= 4;
//mantiksal operatorler

//&& (and) iki şartında geçerli olması gerekir yoksa false döner
// true  &&  true   => true
// true  &&  false  => false
// false &&  false  => false

val = (a > b) && (a > c)


//||(or) bir şartın yerine getiriliyor olması yeterli 
// true  && true  => true
// true  && false => true
// false && false => false

val = (a > b) || (a < c)

//!(not) başına ! koyulan koşulun tersini almış oluruz
val = !(a > b)









console.log(val);