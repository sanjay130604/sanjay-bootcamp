import React, { useState } from 'react';
import './App.css';
import StudentList from './StudentList';
import StudentSearchBar from './StudentSearchBar';
import './index.css';

function App() {
  const students = [
    { id: 1, name: 'SANJAY' },
    { id: 2, name: 'AKASH' },
    { id: 3, name: 'PRADEEP' },
    { id: 4, name: 'VIMAL' },
    { id: 5, name: 'JAGAN' },
    // Add more students here as needed
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <StudentSearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <StudentList students={filteredStudents} />
    </div>
  );
}

export default App;
