// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import Button from './Button';

function App() {
  const [count, setCount] = useState(0);

  // const updateCount = () => {
  //   setCount(count + 1);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let&apos;s Count!</h1>
        <button onClick={() => setCount(count + 1)}>click me!</button>
        <p>Count: {count}</p>
      </header>
    </div>
  );
}

export default App;
