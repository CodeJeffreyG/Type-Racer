import { time } from "console";
import React, { useState, useEffect, useRef } from "react";
import { start } from "repl";
import { isShorthandPropertyAssignment } from "typescript";
import useGame from "./useGame";

function App() {
  const {
    isGameRunning,
    onChange,
    timeRemaining,
    startGame,
    wordCount,
    text,
    textBoxRef,
  } = useGame();

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        disabled={!isGameRunning}
        name="words"
        onChange={onChange}
        value={text}
        ref={textBoxRef}
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
