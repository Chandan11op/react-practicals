import React, { useState, useEffect } from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    if (clickCount > 0) {
      console.log('Button clicked! Total clicks: ' + clickCount);
    }
  }, [clickCount]);
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Practical 8: useEffect Logger</h1>
      <hr />
      <h2>Total Clicks: {clickCount}</h2>
      <button onClick={() => setClickCount(clickCount + 1)}>
        Click Me!
      </button>
    </div>
  );
}
export default App;
