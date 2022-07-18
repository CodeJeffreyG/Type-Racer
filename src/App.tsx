import { time } from "console";
import React, { useState, useEffect } from "react";
import { isShorthandPropertyAssignment } from "typescript";

function App() {
  //state of string in text area
  const [text, setText] = useState("");

  //set state for decrementing counter
  const [timeRemaining, setTimeRemaining] = useState(5);

  //state for if game is running
  const [isGameRunning, setisGamerunning] = useState(false);

  //decrement timer
  useEffect(() => {
    //set condition for set timeout to stop decrementing
    if (isGameRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  //set state to textarea
  function onChange(event: any) {
    const { value } = event.target;
    setText(value);
  }

  //logic to count words... ensures an empty string is not counted to length
  function calculateWordCount(text: any) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word: any) => word !== "").length;
  }

  console.log(text);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea name="words" onChange={onChange} value={text} />
      <h4>{`Time remaining: ${timeRemaining}`}</h4>
      <button onClick={() => setisGamerunning(true)}>Start</button>
      <h1>{`Word count: ???`}</h1>
    </div>
  );
}

export default App;
