import React from 'react';
import StudentList from './StudentList';

// Example array of student objects
const students = [
  { name: 'Alice Johnson', major: 'Computer Science', year: 'Junior' },
  { name: 'Bob Smith', major: 'Mathematics', year: 'Senior' },
  { name: 'Charlie Brown', major: 'Physics', year: 'Sophomore' },
  { name: 'Alice Johnson', major: 'Computer Science', year: 'Junior' },
  { name: 'David Lee', major: 'Engineering', year: 'Freshman' }
];

const App = () => {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>Student List</h1>
      <StudentList students={students} />
    </div>
  );
};

const styles = {
  appContainer: {
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
