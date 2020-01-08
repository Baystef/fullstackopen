import React from 'react';

const Total = ({ parts }) => {
  const [first, second, third] = parts;
  return  <p>Number of exercises <strong>{first.exercises + second.exercises + third.exercises}</strong></p>
}

export default Total;
