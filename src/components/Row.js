import React from "react";

export default function Row({ guess, currentGuess }) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, index) => {
          return (
            <div className={letter.color} key={index}>
              {letter.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    console.log(letters);
    return (
      <div className="row current">
        {letters.map((value, index) => {
          return (
            <div className="filled" key={index}>
              {value}
            </div>
          );
        })}
        {[...Array(5 - letters.length)].map((v, i) => {
          return <div key={i}></div>;
        })}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
