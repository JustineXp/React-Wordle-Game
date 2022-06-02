import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, turn, isCorrect } =
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
      {/* {turn > 5 && <p className="depleted">Guessed have been depleted</p>}
      {turn > 5 && <p>WORD : {word}</p>} */}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
}
