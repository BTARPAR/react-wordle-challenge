import React, { useState } from 'react';
import Board from './Board';
import GuessInput from './GuessInput';

const SECRET_WORD = 'SPEND';
const MAX_GUESSES = 5;
const WORD_LENGTH = 5;

export default function App() {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState('');

  const isGameOver = message !== '';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isGameOver) return;

    const formattedGuess = guess.trim().toUpperCase();

    if (formattedGuess.length !== WORD_LENGTH) {
      return;
    }

    const updatedGuesses = [...guesses, formattedGuess];

    setGuesses(updatedGuesses);
    setGuess('');

    if (formattedGuess === SECRET_WORD) {
      setMessage("You've won!");
    } else if (updatedGuesses.length === MAX_GUESSES) {
      setMessage("You've lost!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>React Wordle Challenge</h1>

      <Board
        guesses={guesses}
        secretWord={SECRET_WORD}
        maxGuesses={MAX_GUESSES}
        wordLength={WORD_LENGTH}
      />

      {!isGameOver && (
        <GuessInput
          guess={guess}
          setGuess={setGuess}
          handleSubmit={handleSubmit}
          wordLength={WORD_LENGTH}
        />
      )}

      {message && <h2>{message}</h2>}
    </div>
  );
}
