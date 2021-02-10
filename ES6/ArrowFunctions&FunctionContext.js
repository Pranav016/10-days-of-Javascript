// arrow functions-

var fun = () => {
    console.log("fun");
}

// context of functions and variables-
sayHello(); //this will execute fine

function sayHello(){
    console.log("Hello");
}

sayBye(); //this gives error

var sayBye = () =>{
    console.log("Bye");
}

console.log(sayHi) //this gives 'undefined'

var sayHi = "Hi";