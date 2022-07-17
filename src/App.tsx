import React, { useState } from "react";

function App() {
  const [text, setText] = useState({
    words: "",
    on: false,
  });

  function onChange(event: any) {
    const { value, name } = event.target;
    setText((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  function onClick() {
    setText((prevText) => ({ ...prevText, on: !prevText.on }));
  }

  console.log(text.words, text.on);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea name="words" onChange={onChange} value={text.words} />
      <h4>Time remaining: ???</h4>
      <button onClick={onClick}>Start</button>
      <h1>{`Word count: ${text.on ? text.words.split(" ").length : "???"}`}</h1>
    </div>
  );
}

export default App;
