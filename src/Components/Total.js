import React from 'react';

const Total = ({ parts }) => {
  const total = parts.reduce((acc, cur) => {
    return acc + cur.exercises
  }, 0);

  return <p>Number of exercises <strong>{total}</strong></p>
}

export default Total;
