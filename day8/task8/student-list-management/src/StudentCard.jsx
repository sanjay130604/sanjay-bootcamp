import React from 'react';

function StudentCard({ student, onRemoveStudent }) {
  return (
    <li>
      <span>{student.name}</span>
      <button onClick={() => onRemoveStudent(student.id)}>Remove</button>
    </li>
  );
}

export default StudentCard;
