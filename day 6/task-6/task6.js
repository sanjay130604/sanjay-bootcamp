const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const USERS_FILE = "users.json";

app.use(express.json()); // Middleware to parse JSON

// Function to read users from the file
const readUsers = () => {
  try {
    const data = fs.readFileSync(USERS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return []; // Return empty array if file doesn't exist or is unreadable
  }
};

// Function to write users to the file
const writeUsers = (users) => {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
};

// ✅ POST endpoint with input validation
app.post("/users", (req, res) => {
  const { name } = req.body;

  // 🔹 Validation: Ensure name exists and is a string
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Name is required and must be a string." });
  }

  // 🔹 Validation: Name must be at least 3 characters
  if (name.length < 3) {
    return res.status(400).json({ error: "Name must be at least 3 characters long." });
  }

  // Read existing users
  const users = readUsers();

  // 🔹 Validation: Check for duplicate name
  if (users.some((user) => user.name.toLowerCase() === name.toLowerCase())) {
    return res.status(400).json({ error: "User with this name already exists." });
  }

  // Create new user object
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
  };

  // Save new user to JSON file
  users.push(newUser);
  writeUsers(users);

  res.status(201).json({ message: "User added", user: newUser });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
