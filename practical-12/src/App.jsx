import React, { useState } from 'react';
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoggedIn(false);
    } else {
      setErrors({});
      setIsLoggedIn(true);
    }
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setErrors({});
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <h1>Practical 12: Controlled Login Form</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div>
          <label><strong>Email:</strong></label>
          <input
            type="text"
            placeholder="e.g. chandan.tiwadi@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error-text">{errors.email}</div>}
        </div>

        <div>
          <label><strong>Password:</strong></label>
          <input
            type="password"
            placeholder="Enter password (e.g. react123)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error-text">{errors.password}</div>}
        </div>

        <button type="submit">Login</button>
        <button type="button" onClick={handleReset} style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Reset</button>
      </form>

      {isLoggedIn && (
        <div className="success-box">
          <h3>Login Successful!</h3>
          <p>Welcome, <strong>{email}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;