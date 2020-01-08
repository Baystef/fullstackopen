import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  const [first, second, third] = parts;
  return (
    <div>
      <Part
        part={first.name}
        exercises={first.exercises}
      />
      <Part
        part={second.name}
        exercises={second.exercises}
      />
      <Part
        part={third.name}
        exercises={third.exercises}
      />
    </div>
  )
}

export default Content;
