const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Example user data
const users = [
  { id: 1, name: 'sanjay' },
  { id: 2, name: 'vijay' },
  { id: 3, name: 'dhoni' },
];

// Endpoint to get a user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Endpoint to add a new user (POST /users)
app.post('/users', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  // Create a new user object with an id that is the next available id
  const newUser = {
    id: users.length + 1, // Simple auto-increment ID
    name: name,
  };

  // Add the new user to the array
  users.push(newUser);

  // Respond with a success message
  res.status(201).json({ message: 'User added' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
