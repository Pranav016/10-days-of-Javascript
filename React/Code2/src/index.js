import React from "react";
import ReactDOM from "react-dom";

//inline style property in JSX is always in JSON object format
//The CSS properties will always be in camel case rather than the usual kebab-case
//The values of the CSS properties will always be as strings

const customStyle = {
  color: "green",
  border: "1px solid black",
  fontSize: "50px"
};

//we can always tap back into those CSS properties like in JS objects
customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

//Another method-
// ReactDOM.render(
//   <h1 style={{color:"red"}}>Hello World!</h1>,
//   document.getElementById("root")
// );