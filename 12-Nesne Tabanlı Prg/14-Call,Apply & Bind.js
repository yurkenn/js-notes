// call, apply & bind

var welcome = function(a,b){
    console.log('welcome '+this.name+'.are you intrested in '+a+ ' and ' +b);
}


var yigit = {name:'yigit'}
var ada ={name:'ada'}

welcome();

welcome.call(ada,'asp.net','angular')
welcome.call(yigit,'asp.net','angular')

welcome.apply(yigit,['asp.net','angular'])
welcome.apply(ada,['asp.net','angular'])

welcomeYigit = welcome.bind(yigit);
welcomeYigit('asp.net','angular')

welcomeAda = welcome.bind(ada);
welcomeAda('asp.net','angular')