import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    "Complete React Practical",
    "Study for Internal Exam",
    "Complete Assignment"
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTasks([...tasks, inputValue.trim()]);
    setInputValue("");
  };

  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginBottom: 0 }}
        />
        <button type="submit" style={{ whiteSpace: 'nowrap' }}>Add Task</button>
      </form>

      <h3>Task List ({tasks.length})</h3>
      {tasks.length === 0 ? (
        <p>No tasks available. Add some tasks above!</p>
      ) : (
        <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 10px',
                borderBottom: '1px solid #ddd',
                backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9'
              }}
            >
              <span>{task}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                style={{ backgroundColor: '#dc3545', borderColor: '#dc3545', padding: '4px 8px', fontSize: '12px' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
