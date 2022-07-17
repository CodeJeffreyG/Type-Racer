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

  function onClick(text: string) {}

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea name="text" onChange={onChange} value={text.words} />
      <h4>Time remaining: ???</h4>
      <button>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
