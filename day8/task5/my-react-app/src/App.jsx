import React from 'react';
import StudentList from './StudentList';

const students = [
  { name: 'Sanjay',
     major: 'Computer Science',
      year: 'Junior' },
  { name: 'Vijay',
     major: 'Mathematics',
      year: '2nd year' },
  { name: 'dhoni',
     major: 'Physics',
      year: 'per-final year' },
  { name: 'loki',
     major: 'Engineering',
      year: 'final year' },
];

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Student List</h1>
      <StudentList students={students} />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fafafa',
    padding: '30px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
};

export default App;
