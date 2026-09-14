import React, { useState, useEffect } from 'react';
function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#f9f9f9';
    console.log('Theme switched to: ' + theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const isDark = theme === 'dark';
  const containerStyle = {
    backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
    color: isDark ? '#f1f1f1' : '#333333',
    borderColor: isDark ? '#444444' : '#dddddd',
  };
  const cardStyle = {
    backgroundColor: isDark ? '#3a3a3a' : '#fafafa',
    borderColor: isDark ? '#555555' : '#dddddd',
    color: isDark ? '#f1f1f1' : '#333333',
  };
  return (
    <div className="container" style={containerStyle}>
      <center>
        <p>Current Theme: <strong>{theme.toUpperCase()}</strong></p>
        <button onClick={toggleTheme}>
          Switch to {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </center>
    </div>
  );
}
export default App;