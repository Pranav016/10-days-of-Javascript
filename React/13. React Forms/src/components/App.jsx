import React from "react";

function App() {
  let [name, setName] = React.useState();
  const [heading, setHeading] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      {/* Form is always submitted by default and refreshes the page*/}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
      {/* <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
}

export default App;
