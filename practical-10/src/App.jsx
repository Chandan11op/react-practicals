import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Home() {
  return (
    <div className="card">
      <h2>Home Page</h2>
      <p>Welcome to the React Practical Application.</p>
    </div>
  );
}
function About() {
  return (
    <div className="card">
      <h2>About This Project</h2>
      <p>
        This is a ReactJS college practical project demonstrating multi-page routing
        using <code>react-router-dom</code>.
      </p>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <center>
          <nav style={{ marginBottom: '15px' }}>
            <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
              Home
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
              About
            </Link>
          </nav>
        </center>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;