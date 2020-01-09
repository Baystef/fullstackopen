import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  const AllParts = parts.map(part => {
    return <Part part={part.name} exercises={part.exercises} key={part.id} />
  });

  return (
    <div>
      {AllParts}
    </div>
  )
}

export default Content;
