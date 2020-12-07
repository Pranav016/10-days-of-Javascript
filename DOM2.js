// Using Events

<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button> //inline script not recommended


//DOM events
//1. onclick
document.getElementById("myBtn").onclick = displayDate;

//2. onload
// The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.
<body onload="checkCookies()"></body>
//The onload and onunload events are triggered when the user enters or leaves the page.

//3. onchange
// The onchange event is often used in combination with validation of input fields.
//<input type="text" id="fname" onchange="upperCase()"></input>

//4. The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element:


{/* <div onmouseover="mOver(this)" onmouseout="mOut(this)" 
style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
Mouse Over Me</div>

<script>
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
</script> */}



//5. The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. First when a mouse-button is clicked, the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, finally, when the mouse-click is completed, the onclick event is triggered.

//6. onfocus

// <!DOCTYPE html>
// <html>
// <head>
// <script>
// function myFunction(x) {
//   x.style.background = "yellow";
// }
// </script>
// </head>
// <body>

// Enter your name: <input type="text" onfocus="myFunction(this)">

// <p>When the input field gets focus, a function is triggered which changes the background-color.</p>

// </body>
// </html>
