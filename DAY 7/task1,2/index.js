const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student.model.js");



const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// Basic route
app.get("/", (req, res) => {
  res.send("hello from node API server");
});

// POST /api/students - Create a new student
app.post("/api/students", async (req, res) => {
  try {
    const newStudent = await Student.create(req.body); // Create new student
    res.status(201).json(newStudent); // Send back created student with status 201
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});

// PUT /students/:id - Update a student by ID
app.put("/students/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const updateData = req.body;

    // Validate if the provided ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(studentId)) {
      return res.status(400).json({ error: "Invalid student ID format" });
    }

    // Check if rollNo is being updated and if it already exists for another student
    if (updateData.rollNo) {
      const existingStudent = await Student.findOne({ rollNo: updateData.rollNo });

      if (existingStudent && existingStudent._id.toString() !== studentId) {
        return res.status(409).json({ error: "Roll number already exists for another student" });
      }
    }

    // Find the student by ID and update
    const updatedStudent = await Student.findByIdAndUpdate(studentId, updateData, { 
      new: true,  // Return the updated document
      runValidators: true // Ensure validation rules are applied
    });

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({ message: "Student updated successfully", student: updatedStudent });

  } catch (error) {
    res.status(500).json({ error: "Server error while updating student" });
  }
});

// GET /students/:id - Retrieve a student by ID
app.get("/students/:id", async (req, res) => {
  try {
    const studentId = req.params.id;

    // Validate if the provided ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(studentId)) {
      return res.status(400).json({ error: "Invalid student ID format" });
    }

    const student = await Student.findById(studentId); // Find the student by ID

    if (!student) {
      return res.status(404).json({ error: "Student not found" }); // If student doesn't exist
    }

    res.status(200).json(student); // Return student details
  } catch (error) {
    res.status(500).json({ error: "Server error while retrieving student" }); // Handle server errors
  }
});

// GET /students - Get all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find(); // Fetch all students
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add additional routes as needed, such as DELETE




// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://sanjaysaravanan130604:mjjtDuI6i0AbUr4w@student.g6hhz.mongodb.net/student?retryWrites=true&w=majority&appName=student"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err); // More detailed error message
    process.exit(1); // Exit the application if MongoDB connection fails
  });
