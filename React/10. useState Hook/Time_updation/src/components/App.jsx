import React from "react";

function App() {
  let now = new Date().toLocaleTimeString();

  var [time, setTime] = React.useState(now);

  setInterval(timeBtn, 1000);

  function timeBtn() {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timeBtn}>Get Time</button>
    </div>
  );
}

export default App;
