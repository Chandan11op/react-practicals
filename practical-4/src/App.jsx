import React from 'react';
import './App.css';

function ChildComponent({ title, message }) {
  return (
    <div style={{ border: '1px solid #007bff', padding: '15px', margin: '15px auto', borderRadius: '5px', maxWidth: '300px', backgroundColor: '#f8f9fa' }}>
      <h3 style={{ marginTop: 0, color: '#007bff' }}>{title}</h3>
      <p style={{ marginBottom: 0 }}>{message}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Parent Component</h1>
      <p>This is the parent component passing data to multiple children:</p>
      <ChildComponent title="Child 1" message="Hello from the first child!" />
      <ChildComponent title="Child 2" message="Hello from the second child!" />
      <ChildComponent title="Child 3" message="Hello from the third child!" />
    </div>
  );
}

export default App;
