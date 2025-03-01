import React from 'react';

function StudentSearchBar({ searchQuery, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a student"
        value={searchQuery}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default StudentSearchBar;
