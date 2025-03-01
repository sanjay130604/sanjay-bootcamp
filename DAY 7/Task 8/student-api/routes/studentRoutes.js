const express = require('express');
const router = express.Router();
const Student = require('../models/student');


router.get('/search', async (req, res) => {
  const query = req.query.q; 
  if (!query) {
    return res.status(400).json({ message: 'Query parameter q is required' });
  }

  try {
    const students = await Student.find({
      $or: [
        { rollNo: { $regex: query, $options: 'i' } },  
        { studentId: { $regex: query, $options: 'i' } }
      ]
    });

    if (students.length === 0) {
      return res.status(404).json({ message: 'No matching students found' });
    }

    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
