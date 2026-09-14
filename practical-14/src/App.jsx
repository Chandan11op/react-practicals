import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>🌐 API Data Fetching</h1>
      <p className="subtitle">User Details from JSONPlaceholder API</p>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="card-container">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <div className="avatar">
                {user.name.charAt(0)}
              </div>

              <h2>{user.name}</h2>

              <p>
                <strong>📧 Email:</strong><br />
                {user.email}
              </p>

              <p>
                <strong>📞 Phone:</strong><br />
                {user.phone}
              </p>

              <p>
                <strong>🌍 Website:</strong><br />
                {user.website}
              </p>

              <button>View Profile</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;