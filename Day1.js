// There are 3 data types in Javascript:
// 1. Numbers
// 2. String
// 3. Boolean
// I'll be testing js code in developer tools/sources/snippets on my chrome browser.
// (Clear cache for new programs)


alert("Hello world!"); // gives pop up of hello world

prompt("What is your name?"); //gives pop up with input box

// Variables:

var myName = "Pranav Mendiratta"; //new variable
myName = "Pranav"; //updating existing var

//Code snippets-

var yourName = prompt("What's your name?");
alert("Welcome to my website " + yourName);



//Strings

"I have " + 10 + "apples."; //concatenation

console.log(message.length); //length of string

message.slice(0,14); //gives 0 to 13 characters

message.toUpperCase(); //converts string to upper case


var message = prompt("Enter your tweet");
len = message.length;
alert("You have written " + len + " characters and have " + (200-len) + "characters left.")



var name = prompt("What is your name?");
alert("Hi " + name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase());