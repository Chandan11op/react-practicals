import { useState, useEffect } from "react";

function App() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Date and Time</h1>
      <h2>{currentDateTime.toLocaleDateString()}</h2>
      <h2>{currentDateTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;