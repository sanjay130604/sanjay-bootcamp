const express = require('express');
const router = express.Router();
const Student = require('../models/student');


router.get('/', async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    
    
    page = parseInt(page) || 1;
    pageSize = parseInt(pageSize) || 10;
    
   
    const skip = (page - 1) * pageSize;

   
    const totalStudents = await Student.countDocuments();

  
    const students = await Student.find().skip(skip).limit(pageSize);

    res.json({
      totalStudents,
      currentPage: page,
      totalPages: Math.ceil(totalStudents / pageSize),
      pageSize,
      students,
    });

  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
