import React, {useEffect} from "react";
import { checkwin } from "../helpers/helpers";

function Popup({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) {
  let finalMessage = ''
  let finalMessageRevelWord = ''
  let playable = true

  if(checkwin(correctLetters, wrongLetters, selectedWord) === 'win'){
    finalMessage = 'Congratulations! You won'
    playable = false
  }else if(checkwin(correctLetters, wrongLetters, selectedWord) === 'lose'){
    finalMessage = 'You lost'
    finalMessageRevelWord = `...the word was: ${selectedWord}`
    playable = false
  }

  useEffect(() => setPlayable(playable))

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'}: {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevelWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;
