import React from 'react';
import './index.css'

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Major: {student.major}</p>
      <p>Year: {student.year}</p>
    </div>
  );
}

export default StudentCard;
