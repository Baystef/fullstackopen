import React from 'react';
import Course from './Components/Course';
import './App.css';

const App = () => {
  const courses = [{
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of react',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'React Hooks',
        exercises: 12,
        id: 4
      },
    ]
  },
  {
    name: 'Node.js',
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      },
    ]
  }
  ]

  const AllCourses = courses.map((course, i) => {
    return <Course course={course} key={i} />
  })

  return (
    <div className="App">
      <h1>Web Development Curriculum</h1>
      {AllCourses}
    </div>
  );
}

export default App;
