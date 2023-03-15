import React, { useState } from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        type="text"
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
