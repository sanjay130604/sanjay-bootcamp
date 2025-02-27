import React, { useState } from 'react';
import './App.css';
import StudentList from './StudentList';
import StudentSearchBar from './StudentSearchBar';
import './index.css'

function App() {
  const initialStudents = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' },
    { id: 5, name: 'Charlie Davis' },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [searchQuery, setSearchQuery] = useState('');
  const [newStudentName, setNewStudentName] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddStudent = () => {
    if (newStudentName.trim() !== '') {
      const newStudent = { id: Date.now(), name: newStudentName };
      setStudents([...students, newStudent]);
      setNewStudentName('');
    }
  };

  const handleRemoveStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Student List Management</h1>
      <StudentSearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div>
        <input
          type="text"
          placeholder="Enter new student's name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      <StudentList students={filteredStudents} onRemoveStudent={handleRemoveStudent} />
    </div>
  );
}

export default App;
