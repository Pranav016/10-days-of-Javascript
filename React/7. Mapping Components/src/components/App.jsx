import React from "react";
import Heading from "./Heading";
import Emoji from "../emojipedia";
import Entry from "./Entry";

function createEntry(Emoji) {
  return (
    <Entry
      key={Emoji.id}
      emoji={Emoji.emoji}
      name={Emoji.name}
      meaning={Emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">{Emoji.map(createEntry)}</dl>
    </div>
  );
}

export default App;
