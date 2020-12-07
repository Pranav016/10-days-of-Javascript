// DOM Nodes
// According to the W3C HTML DOM standard, everything in an HTML document is a node:

// The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes
// Every HTML attribute is an attribute node (deprecated)
// All comments are comment nodes



// Node Relationships
// The nodes in the node tree have a hierarchical relationship to each other.

// The terms parent, child, and sibling are used to describe the relationships.

// In a node tree, the top node is called the root (or root node)
// Every node has exactly one parent, except the root (which has no parent)
// A node can have a number of children
// Siblings (brothers or sisters) are nodes with the same parent



// Navigating Between Nodes
// You can use the following node properties to navigate between nodes with JavaScript:

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling


//1. Method-
//<title id="demo">DOM Tutorial</title>
//The element node <title> (in the example above) does not contain text.

//It contains a text node with the value "DOM Tutorial".

//The value of the text node can be accessed by the node's innerHTML property:

var myTitle = document.getElementById("demo").innerHTML;
//Accessing the innerHTML property is the same as accessing the nodeValue of the first child:

var myTitle = document.getElementById("demo").firstChild.nodeValue;
//Accessing the first child can also be done like this:

var myTitle = document.getElementById("demo").childNodes[0].nodeValue;




// DOM Root Nodes
// There are two special properties that allow access to the full document:

// document.body - The body of the document
// document.documentElement - The full document



// The nodeName Property
// The nodeName property specifies the name of a node.
document.getElementById("id01").nodeName;


// The nodeValue Property
// The nodeValue property specifies the value of a node.