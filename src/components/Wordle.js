import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, usedKeys, turn, isCorrect } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  let word = solution.toLocaleUpperCase();

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      console.log("Congratulations You Won !!");
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      console.log("Opps! You Run out of Moves");
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp, isCorrect, turn]);

  // useEffect(() => {
  //   console.log(guesses, turn, isCorrect);
  // }, [guesses, isCorrect, turn]);

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad keys={usedKeys} />
      {showModal && (
        <Modal turn={turn} isCorrect={isCorrect} solution={solution} />
      )}
    </div>
  );
}
