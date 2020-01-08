import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Total from './Components/Total';
import './App.css';

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of react',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ]
  }
const { name, parts } = course;

  return (
    <div className="App">
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
