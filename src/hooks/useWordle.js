import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log("Word formatting in Progress");
    const solutionArray = [...solution];
    const formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });
    // console.log(formattedGuess);

    //SET CORRECTLY PLACED LETTER COLOR TO GREEN
    formattedGuess.forEach((letter, i) => {
      if (letter.key === solutionArray[i]) {
        letter.color = "green";
        solutionArray[i] = null;
      }
    });
    console.log(formattedGuess);

    //SET THE INCLUSIVE LETTER COLOR TO YELLOW

    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses((prev) => {
      let newGuesses = [...prev];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prev) => {
      return [...prev, currentGuess];
    });

    setTurn((prev) => {
      return prev + 1;
    });

    setCurrentGuess("");
  };

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
          return (prev + key).toLocaleLowerCase();
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
