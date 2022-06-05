import React, { useEffect, useState } from "react";

export default function Keypad({ keys }) {
  const [letters, setLetters] = useState(null);
  console.log(keys);
  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
        console.log(json);
      });
  }, []);

  console.log(letters);
  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          let kala = keys[letter.key];
          return (
            <div className={kala} key={letter.key}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
}
