import React from 'react';

const GuessInput = ({ guess, setGuess, handleSubmit, wordLength }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={guess}
        maxLength={wordLength}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default GuessInput;
