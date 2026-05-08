import React from 'react';
import Cell from '../Cell';

const Row = ({ guess, secretWord, wordLength }) => {
  const getColor = (letter, index) => {
    if (!letter) return 'white';

    if (secretWord[index] === letter) {
      return 'green';
    }

    if (secretWord.includes(letter)) {
      return 'yellow';
    }

    return 'red';
  };

  return (
    <div style={{ display: 'flex', marginBottom: 8 }}>
      {Array.from({ length: wordLength }).map((_, index) => {
        const letter = guess[index] || '';

        return (
          <Cell key={index} letter={letter} color={getColor(letter, index)} />
        );
      })}
    </div>
  );
};

export default Row;
