import React from 'react';
import StudentCard from './StudentCard';

// A functional component that renders a list of StudentCard components
const StudentList = ({ students }) => {
  return (
    <div style={styles.container}>
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default StudentList;
