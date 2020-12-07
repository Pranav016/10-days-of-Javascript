// Creating New HTML Elements (Nodes)
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);


// Creating new HTML Elements - insertBefore()
var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);


//Removing an element
var elmnt = document.getElementById("p1");
elmnt.remove();



//HTML collections
var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = myCollection.length;



//NodeList
var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = myNodelist.length;


//Removing or replacing a child
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
// parent.replaceChild(para, child);