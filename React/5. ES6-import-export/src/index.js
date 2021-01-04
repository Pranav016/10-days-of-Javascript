import React from "react";
import ReactDOM from "react-dom";

//Method 1-
import { add, multiply, subtract, divide } from "./calculator";

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

//Method 2-
// import * as math from "./calculator";

// ReactDOM.render(
//   <ul>
//     <li>{math.add(1, 2)}</li>
//     <li>{math.multiply(2, 3)}</li>
//     <li>{math.subtract(7, 2)}</li>
//     <li>{math.divide(5, 2)}</li>
//   </ul>,
//   document.getElementById("root")
// );
