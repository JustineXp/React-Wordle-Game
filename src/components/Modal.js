import React from "react";

export default function Modal({ turn, isCorrect, solution }) {
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
