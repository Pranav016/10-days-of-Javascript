# JavaScript Insights
1. JavaScript is a synchronous, single threaded langauage.
1. Everything in javascript is executed inside an **execution context**. It has two parts
    * Variable Environment (Memory Component) - Stores the variables, functions etc.
    * Thread of Execution - Executes the code line by line. (JS is synchronous and single threaded)
1. JavaScript has a **call stack** like many other languages. It maintains order of execution of the execution contexts.
1. Before executing any code, a **Global Execution Context** is pushed inside the call stack and stays there untill the whole code is executed.

### Hoisting
* Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
* In JavaScript, Declarations are Hoisted, Initializations are Not Hoisted.
Example-
This code works because declaration is hoisted
```
    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element

    var x; // Declare x
```

This does not work because initialization is not hoisted. It does not give error but we get `undefined` in the console.
```
    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element

    var x = 5; // Initialize x
```

##### The let and const Keywords
* Variables defined with `let` and `const` are hoisted to the top of the block, but not initialized.
* Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
* Using a `let` variable before it is declared will result in a **ReferenceError**.
    * The variable is in a "temporal dead zone" from the start of the block until it is declared.
* Using a `const` variable before it is declared, is a syntax errror, so the code will simply not run.

#### Functions in hoisting-
```
console.log(hello);
function hello () {..} //works fine 
var hello = function () {..} //Gives error
var hello = () => {..} //Gives error
```
<hr/>

# 10-days-of-Javascript

This is my take on the 30 days of JavaScript challenge.

## Environment Setup -
* Drop a :star: on the GitHub repository.
<br/>

* Download and install a code/ text editor.
    - Recommended-
        - [Download VS Code](https://code.visualstudio.com/download)
        - [Download Atom](https://atom.io/)
<br/>

### To run the code -
#### Method 1

* Download [Node JS](https://nodejs.org/en/)
<br/>

* To run the file in the terminal, run command -
```
node <file name>
```

#### Method 2
* To run in the console of the browser, create an `index.html` file and add this code.
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <script src="" async defer></script>
    </body>
</html>
```
<br/>

* Update the `src` attribute of 
```
<script src="" async defer></script>
```
with the relative path of the `.js` file.

<hr/>

<p align="center"> Now you are all set to use this repo. </p>