const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = "users.json";

app.use(express.json());

// Load users from JSON file
const loadUsers = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Save users to JSON file
const saveUsers = (users) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2), "utf8");
};

// GET: Fetch all users
app.get("/users", (req, res) => {
  try {
    const users = loadUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET: Fetch a single user by ID
app.get("/users/:id", (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const users = loadUsers();
    const user = users.find((u) => u.id === userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST: Add a new user
app.post("/users", (req, res) => {
  try {
    const { name } = req.body;
    if (!name || typeof name !== "string")
      return res.status(400).json({ error: "Invalid input: Name is required and must be a string" });

    const users = loadUsers();
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    saveUsers(users);

    res.status(201).json({ message: "User added", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT: Update an existing user
app.put("/users/:id", (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { name } = req.body;

    if (!name || typeof name !== "string")
      return res.status(400).json({ error: "Invalid input: Name is required and must be a string" });

    const users = loadUsers();
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) return res.status(404).json({ error: "User not found" });

    users[userIndex].name = name;
    saveUsers(users);

    res.json({ message: "User updated", user: users[userIndex] });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE: Remove a user
app.delete("/users/:id", (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    let users = loadUsers();
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) return res.status(404).json({ error: "User not found" });

    users.splice(userIndex, 1);
    saveUsers(users);

    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Handle 404 errors for unknown routes
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});