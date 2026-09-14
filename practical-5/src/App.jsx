import React from "react";
import "./App.css";

const App = () => {
  const students = [
    {
      id: 101,
      name: "Alex Rivera",
      age: 20,
      major: "Computer Science",
      gpa: 3.8,
      isEnrolled: true,
      courses: ["Data Structures", "Web Development", "Discrete Math"],
    },
    {
      id: 102,
      name: "Samantha Chen",
      age: 21,
      major: "Data Science",
      gpa: 3.9,
      isEnrolled: true,
      courses: ["Machine Learning", "Linear Algebra", "Database Systems"],
    },
    {
      id: 103,
      name: "Marcus Johnson",
      age: 19,
      major: "Mechanical Engineering",
      gpa: 3.4,
      isEnrolled: true,
      courses: ["Calculus III", "Thermodynamics", "CAD Design"],
    },
    {
      id: 104,
      name: "Elena Rostova",
      age: 22,
      major: "Biology",
      gpa: 3.7,
      isEnrolled: false,
      courses: ["Genetics", "Organic Chemistry", "Microbiology"],
    },
    {
      id: 105,
      name: "Liam O'Connor",
      age: 20,
      major: "Finance",
      gpa: 3.6,
      isEnrolled: true,
      courses: ["Corporate Finance", "Macroeconomics", "Financial Accounting"],
    },
    {
      id: 106,
      name: "Aisha Rahman",
      age: 21,
      major: "Psychology",
      gpa: 3.85,
      isEnrolled: true,
      courses: ["Cognitive Psychology", "Statistical Methods", "Child Development"],
    },
    {
      id: 107,
      name: "Carlos Mendez",
      age: 23,
      major: "Electrical Engineering",
      gpa: 3.2,
      isEnrolled: true,
      courses: ["Circuit Analysis", "Signal Processing", "Electromagnetics"],
    },
    {
      id: 108,
      name: "Chloe Dubois",
      age: 19,
      major: "Graphic Design",
      gpa: 3.95,
      isEnrolled: true,
      courses: ["Typography", "Digital Illustration", "History of Art"],
    },
    {
      id: 109,
      name: "Ethan Hunt",
      age: 22,
      major: "Cybersecurity",
      gpa: 3.5,
      isEnrolled: true,
      courses: ["Network Security", "Ethical Hacking", "Cryptography"],
    },
    {
      id: 110,
      name: "Yuki Tanaka",
      age: 20,
      major: "Environmental Science",
      gpa: 3.65,
      isEnrolled: false,
      courses: ["Ecology", "Climate Policy", "Geographic Information Systems"],
    },
  ];

  return (
    <div className="student-container">
      <h2 className="student-title">Student Roster</h2>

      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Major</th>
            <th>GPA</th>
            <th>Status</th>
            <th>Courses</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td className="student-name">{student.name}</td>
              <td>{student.age}</td>
              <td>{student.major}</td>
              <td>{student.gpa.toFixed(2)}</td>

              <td>
                <span
                  className={`status ${student.isEnrolled ? "active" : "inactive"
                    }`}
                >
                  {student.isEnrolled ? "Active" : "Inactive"}
                </span>
              </td>

              <td>
                {student.courses.map((course, i) => (
                  <span key={i} className="course-badge">
                    {course}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;