import React from "react";

function App() {
  const [fullName, setName] = React.useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}{" "}
      </h1>
      <form>
        <input
          value={fullName.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={fullName.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
