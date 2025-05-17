const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

// Log attendance
router.post('/', async (req, res) => {
  const attendance = new Attendance({
    memberId: req.body.memberId,
    date: req.body.date || new Date()
  });

  try {
    const newAttendance = await attendance.save();
    res.status(201).json(newAttendance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get attendance records for a member
router.get('/:memberId', async (req, res) => {
  try {
    const attendance = await Attendance.find({ memberId: req.params.memberId })
      .sort({ date: -1 });
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 