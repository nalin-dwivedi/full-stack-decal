import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import React, {useState} from 'react';

function App() {
  let x = 5;
  let items = ['apple', 'oranges', 'banana'];

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p style={{color: 'red'}}>{x}</p>
      {items.map((item) => (
        <li>{item}</li>
      ))}
      <Button name="Add" click={() => setCount(count+1)}/>
      <Button name="Sub" click={() => setCount(count-1)}/>
      <Counter counter={count}/>
    </div>
  );
}

export default App;
