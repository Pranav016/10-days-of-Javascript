import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Random Images
    </h1>
    <img alt="" src={img} />
  </div>,
  document.getElementById("root")
);
