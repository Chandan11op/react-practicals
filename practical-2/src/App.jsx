import React from 'react';
function ProfileCard(props) {
  return (
    <div className="card">
      <h3>Profile Card</h3>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Subject:</strong> {props.subject}</p>
      <p><strong>Roll No.:</strong> {props.rollNo}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1> Student Id</h1>
      <hr />

      <ProfileCard
        name="Chandan Gopal Tiwadi"
        age={20}
        email="chandan.tiwadi@example.com"
        course="B.Sc. IT"
        subject="ReactJs"
        rollNo={57}
      />
    </div>
  );
}

export default App;