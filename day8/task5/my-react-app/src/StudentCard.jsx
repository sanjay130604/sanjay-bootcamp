import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{student.name}</h2>
      <p style={styles.major}>Major: {student.major}</p>
      <p style={styles.year}>Year: {student.year}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
  },
  name: {
    fontSize: '1.5rem',
    margin: '0 0 10px 0',
  },
  major: {
    fontSize: '1rem',
    color: '#555',
  },
  year: {
    fontSize: '1rem',
    color: '#888',
  },
};

export default StudentCard;
