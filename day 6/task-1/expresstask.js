// Import the express library
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
