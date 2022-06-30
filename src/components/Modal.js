import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect } from "react";

export default function Modal({ turn, isCorrect, modalRemover, solution }) {
  useEffect(() => {
    window.addEventListener("click", modalRemover);
    return () => {
      window.removeEventListener(("click", modalRemover));
    };
  }, []);

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Congratulations !! You Won.</h1>
          <p className="solution">The Solution is : {solution}</p>
          <p>You got is correct after {turn} guesses</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind !!</h1>
          <p className="solution">The Solution is : {solution}</p>
          <p>All the best next time !</p>
        </div>
      )}
    </div>
  );
}
