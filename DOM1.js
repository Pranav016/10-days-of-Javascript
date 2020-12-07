// DOM- Document Object Model 

// The HTML DOM is a standard object model and programming interface for HTML. It defines:

// - The HTML elements as objects
// - The properties of all HTML elements
// - The methods to access all HTML elements
// - The events for all HTML elements
// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.



// Finding HTML elements using DOM-

var x = document.getElementById("intro");
var x = document.getElementsByTagName("p");
var x = document.getElementsByClassName("intro");
var x = document.querySelectorAll("p.intro");  //works like a CSS selector
// We can also find html elements using some predefined HTML collections


//Changing elements using DOM-
element.innerHTML =  new html 
element.attribute = new value
// example- document.getElementById("myImage").src = "landscape.jpg";
element.style.property = new style
//example- document.getElementById("p2").style.color = "blue";


//Event handlers
document.getElementById(id).onclick = function(){code}

//Write directly to the HTML output stream
document.write(Date());