import React from 'react';

const Cell = ({ letter, color }) => {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        border: '1px solid black',
        marginRight: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: color,
      }}
    >
      {letter}
    </div>
  );
};

export default Cell;
