import React from 'react';

// A functional component to display individual student information with dynamic background color
const StudentCard = ({ student }) => {
  // Function to return background color based on student's year
  const getBackgroundColor = (year) => {
    switch (year) {
      case 'Freshman':
        return '#a8e6cf'; // Light green
      case 'Sophomore':
        return '#ffeb3b'; // Yellow
      case 'Junior':
        return '#ff9800'; // Orange
      case 'Senior':
        return '#3f51b5'; // Blue
      default:
        return '#f4f4f9'; // Default gray if no match
    }
  };

  const backgroundColor = getBackgroundColor(student.year);

  return (
    <div style={{ ...styles.card, backgroundColor }}>
      <h2 style={styles.name}>{student.name}</h2>
      <p style={styles.major}>Major: {student.major}</p>
      <p style={styles.year}>Year: {student.year}</p>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
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
