//ex1: 20.04.2017 tarihinde trafige cikan bir aracin servis bakim sureleri asgaida verlmilstir. bu bilgiler gore servis uyarsini veriniz 
//1.bakim :1yil 2.bakim:2yil 3.bakim :3yil

// var trafigeCikis = new Date('04/20/2020');
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun =Math.floor (trafiktekiMs/(1000*60*60*24));

// if(trafiktekiGun<=365){
//     console.log('1.servis gununuz geldi');
// } else if (trafiktekiGun>365 && trafiktekiGun<=365*2){
//     console.log('2.servis bakim sureniz geldi');
// } else if (trafiktekiGun>365*2 && trafiktekiGun<=365*3){
//     console.log('3.servis bakim sureniz geldi');
// } else{
//     console.log('bilinmeyen bir sure');
// }

// console.log(trafiktekiGun);



//begin > who's there ? / cancel>canceled /other > i dont know you/admin>password?/cancel>canceled/other>wrong password/themaster>welcome

var result = prompt("who is there ? ")

if(result == 'cancel'){
    console.log('canceled');
} else if (result == "Admin"){
    console.log('welcome admin');
    
    var password = prompt('enter your password')
    if(password == "cancel"){
        console.log('canceled');
    }else if(password =='1234'){
        console.log('hg admin');
    }else{
        console.log('wrong password');
    }

} else{
    console.log('idk you');
}




