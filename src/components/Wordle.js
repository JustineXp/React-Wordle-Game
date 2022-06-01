import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, turn, isCorrect } =
    useWordle(solution);

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
      Wordle : {currentGuess}
      {turn > 5 && <div>Your Guesses have been Depleted</div>}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
}
