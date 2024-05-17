import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="Container">
      <h1>Contador</h1>
      <div className="counter">{count}</div>
      <div className="buttons">
        <button onClick={increment} className="increment">Incrementar</button>
        <button onClick={decrement} className="decrement">Decrementar</button>
      </div>
    </div>
  );
}

export default App;
