import React from "react";

export default function Row({ guess }) {
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
