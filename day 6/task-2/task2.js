// Import the express library
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define a route to handle GET requests to /users
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  
  // Return the users array as a JSON response
  res.json(users);
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
