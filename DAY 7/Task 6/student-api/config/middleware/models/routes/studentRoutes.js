const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const validateStudent = require('../middleware/validateInput');


router.post('/', validateStudent, async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: 'Student created successfully', student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: 'Invalid student ID' });
  }
});


router.put('/:id', validateStudent, async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student updated successfully', student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid student ID' });
  }
});

module.exports = router;
