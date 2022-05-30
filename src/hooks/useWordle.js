import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log("Word formatting in Progress");
  };

  const addNewGuess = () => {};
  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      //if the number of turn is not grater than 6
      if (turn > 5) {
        console.log("Guesses Depleted.");
        return;
      }
      //check for already typed guess
      if (history.includes(currentGuess)) {
        console.log("Word already guessed.");
        return;
      }
      //check for length of the word
      if (currentGuess.length !== 5) {
        console.log("Word should have 5 characters");
      }
      formatGuess();
    }

    if (key === "Backspace") {
      //   console.log(key);
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    // console.log(key);
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
