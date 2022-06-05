import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

export default function Wordle({ solution }) {
  const [message, setMessage] = useState(null);
  const { currentGuess, handleKeyUp, guesses, usedKeys, turn, isCorrect } =
    useWordle(solution);

  let word = solution.toLocaleUpperCase();

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  // useEffect(() => {
  //   console.log(guesses, turn, isCorrect);
  // }, [guesses, isCorrect, turn]);

  return (
    <div>
      {/* Wordle : {currentGuess} */}
      {turn > 5 && <p>WORD : {word}</p>}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad keys={usedKeys} />
    </div>
  );
}
