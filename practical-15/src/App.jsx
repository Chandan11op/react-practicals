import React, { createContext, useContext, useState } from 'react';

// 1. Create Theme Context
const ThemeContext = createContext();

// 2. Theme Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Child Component consuming Context for Theme Toggle
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ margin: '15px 0' }}>
      <p>Current Theme: <strong>{theme.toUpperCase()}</strong></p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

// 4. Child Component consuming Context for Profile Card Styling
function ProfileCard() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const cardStyle = {
    backgroundColor: isDark ? '#333333' : '#f4f4f4',
    color: isDark ? '#ffffff' : '#333333',
    borderColor: isDark ? '#555555' : '#cccccc',
  };

}
function PracticalContent() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const containerStyle = {
    backgroundColor: isDark ? '#222222' : '#ffffff',
    color: isDark ? '#ffffff' : '#333333',
    borderColor: isDark ? '#444444' : '#dddddd',
  };

  return (
    <div className="container" style={containerStyle}>
      <h1 style={{ color: isDark ? '#ffffff' : '#222222' }}>
        Global Theme Context API
      </h1>
      <hr />

      <p>Demonstrating <code>createContext()</code> and <code>useContext()</code> across child components.</p>

      <ThemeToggle />
      <ProfileCard />
    </div>
  );
}
function App() {
  return (
    <ThemeProvider>
      <PracticalContent />
    </ThemeProvider>
  );
}

export default App;
