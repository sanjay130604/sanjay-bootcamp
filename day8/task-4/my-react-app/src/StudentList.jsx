
import React from 'react';
import StudentCard from './StudentCard';
import './index.css'

function StudentList() {
  const students = [
    { name: 'sanjay',
       major: 'Computer Science',
        year: '2025' },
    
  ];

  return (

    <div className="student-list">
      {students.map((student, index) => (
        <StudentCard
        key={index}
        student={student} />
      ))}

    </div>
  );
}

export default StudentList;
