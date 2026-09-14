import React, { useState } from 'react';

// Counter application demonstrating useState hook
function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h2>Current Count</h2>
      <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#007bff', margin: '10px 0' }}>
        {count}
      </p>

      <div>
        <button onClick={increment}>Increment (+1)</button>
        <button onClick={decrement}>Decrement (-1)</button>
        <button onClick={reset} style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
