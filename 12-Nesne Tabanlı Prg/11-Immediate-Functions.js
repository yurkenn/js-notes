// Immidiate Functions

// (function(){

// })();

// (function(){

// }());

(function(name) {
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    var today = new Date();

    var msg = 'Welcome ' + name + ' Today is ' + days
    [today.getDay()];

    console.log(msg);
}('Oguz'));
