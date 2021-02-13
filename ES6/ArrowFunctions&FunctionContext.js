// arrow functions-

var fun = () => {
    console.log("fun");
}

// context of functions and variables-
sayHello(); //this will execute fine since not stored in a variable, regular function call

function sayHello(){
    console.log("Hello");
}

sayBye(); //this gives error, stored in a variable

var sayBye = () =>{
    console.log("Bye");
}

console.log(sayHi) //this gives 'undefined'

var sayHi = "Hi";



// ARROW FUNCTIONS

// Converting it to an arrow function
// const Pranav = ()=>{
//     console.log("This is the best person ever")
// }
// Pranav();


// One liners do not require braces/return
// one line will automatically return
// const greet = () =>  "Good Morning";


// Arrow functions in case we want to return objects
// const greet = () =>  ({name: "Pranav"});

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const greet = name =>  "Good Morning " + name;

const greet = (name,ending) =>  "Good Morning " + name + ending;

console.log(greet('Pranav'))
