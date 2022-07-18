import { time } from "console";
import React, { useState, useEffect } from "react";
import { start } from "repl";
import { isShorthandPropertyAssignment } from "typescript";

function App() {
  //state of string in text area
  const [text, setText] = useState("");

  //set state for decrementing counter
  const [timeRemaining, setTimeRemaining] = useState(0);

  //state for if game is running
  const [isGameRunning, setisGamerunning] = useState(false);

  //setting word count state
  const [wordCount, setWordCount] = useState("???");

  //decrement timer
  useEffect(() => {
    //set condition for set timeout to stop decrementing
    if (isGameRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining <= 0) {
      endGame();
    }
  }, [timeRemaining]);

  //set state to textarea
  function onChange(event: any) {
    const { value } = event.target;
    setText(value);
  }

  function startGame() {
    if (timeRemaining === 0) {
      setisGamerunning(true);
      setText("");
      setTimeRemaining(10);
      setWordCount("???");
    }
  }

  function endGame() {
    let numOfWords = calculateWordCount(text);
    setWordCount(numOfWords);
    setisGamerunning(false);
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
      <textarea
        disabled={!isGameRunning}
        name="words"
        onChange={onChange}
        value={text}
      />
      <h4>
        {isGameRunning
          ? `Time remaining: ${timeRemaining}`
          : "Press Start To Play!"}
      </h4>
      <button disabled={isGameRunning} onClick={startGame}>
        Start
      </button>
      <h1>{`Word count: ${wordCount}`}</h1>
    </div>
  );
}

export default App;
