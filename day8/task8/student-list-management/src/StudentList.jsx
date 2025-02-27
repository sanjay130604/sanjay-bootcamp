import React from 'react';
import StudentCard from './StudentCard';

function StudentList({ students, onRemoveStudent }) {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <StudentCard key={student.id} student={student} onRemoveStudent={onRemoveStudent} />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
