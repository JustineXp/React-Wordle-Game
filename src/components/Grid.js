import React from "react";
import Row from "./Row";

export default function Grid({ currentGuess, guesses, turn }) {
  // console.log(guesses);
  return (
    <div>
      {guesses.map((guess, index) => {
        return <Row key={index} guess={guess} />;
      })}
    </div>
  );
}
