import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
const studentsData = [
  { id: 1, name: "Chandan Gopal Tiwadi", age: 20, course: "B.Sc. IT", subject: "ReactJs", rollNo: 57, email: "chandan.tiwadi@gmail.com" },
  { id: 2, name: "Rahul Sharma", age: 21, course: "B.Sc. IT", subject: "ReactJs", rollNo: 12, email: "rahul.sharma@gmail.com" },
  { id: 3, name: "Priya Shah", age: 20, course: "B.Sc. IT", subject: "ReactJs", rollNo: 34, email: "priya.shah@gmail.com" }
];
function UserList() {
  return (
    <div>
      <h2>Student List</h2>
      <p>Click on a student's name to view dynamic details route:</p>
      <ul>
        {studentsData.map((student) => (
          <li key={student.id} style={{ margin: '8px 0' }}>
            <Link to={'/user/' + student.id} style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
              {student.name} (Roll No: {student.rollNo})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = studentsData.find(s => s.id === parseInt(id, 10));
  if (!student) {
    return (
      <div className="card">
        <h3>User Not Found</h3>
        <button onClick={() => navigate('/')}>Back to List</button>
      </div>
    );
  }
  return (
    <div className="card">
      <h2>Student Details (ID: {id})</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Subject:</strong> {student.subject}</p>
      <p><strong>Roll No.:</strong> {student.rollNo}</p>
      <button onClick={() => navigate('/')} style={{ marginTop: '10px' }}>
        &larr; Back to List
      </button>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;