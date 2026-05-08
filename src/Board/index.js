import React from 'react';
import Row from '../Row';

const Board = ({ guesses, secretWord, maxGuesses, wordLength }) => {
  return (
    <div>
      {Array.from({ length: maxGuesses }).map((_, index) => (
        <Row
          key={index}
          guess={guesses[index] || ''}
          secretWord={secretWord}
          wordLength={wordLength}
        />
      ))}
    </div>
  );
};

export default Board;
