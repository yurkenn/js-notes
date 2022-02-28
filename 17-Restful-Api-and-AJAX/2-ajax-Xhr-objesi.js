var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){

        if( xhr.status === 200){
        console.log(xhr.responseText);
    }else if(xhr.status === 404){
        console.log('kaynak bulunamadi');
    }
    }
}

// genellikle serverdan bir bilgi alirken bekleme sirasinda ekrana gif gosterilirken kullanilir
xhr.onprogress = function(){
    console.log('on progressing');
}

//serverdan bir bilgi almak istedigimizde GET kullaniriz.
xhr.open('GET','msg.txt',true) // true dersek islemlerimiz asekron birsekilde calisir. // false dersek sekron olarak ela alir. bu istek sonuclanmadan baska bir islem yapilamaz.
xhr.send()

console.log("hello"); // eger true yani asekron bir islem yaparsak hello degeri once yazilir ama false dersek yani sekron olursak once hello there yazisi yazar islem biter ardindan hello yazisini okuruz.

// serverda bir update yapcagimiz zaman post kullaniriz
// xhr.open('POST','msg.txt',true);

/*
readyState :

0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

status:
200: "OK"
403: "Forbidden"
404: "Not Found"

*/