// Callback function (arrow function)
var isEven = [2, 4, 6, 8].every((element) => element%2 === 0); //no return statement required in this case


// Callback function example (not arrow function)
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);