import React from "react";

function WrongLetters({wrongLetters}) {
  return (
    <div class="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
        .map((letter) => <span>{letter}</span>)
        .reduce((prev, curr) => prev === null ? [curr] : [...prev, ', ', curr], null)}
      </div>
    </div>
  );
}

export default WrongLetters;
