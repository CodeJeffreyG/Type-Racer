import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function onChange(event: any) {
    const { value } = event.target;
    setText(value);
  }

  function calculateWordCount(text: any) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word: any) => word !== "").length;
  }

  console.log(text);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea name="words" onChange={onChange} value={text} />
      <h4>Time remaining: ???</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>{`Word count: ???`}</h1>
    </div>
  );
}

export default App;
