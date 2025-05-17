const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const mongoose = require('mongoose');

// Get all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new member
router.post('/', async (req, res) => {
  const member = new Member({
    name: req.body.name,
    phone: req.body.phone,
    membershipType: req.body.membershipType,
    joinDate: req.body.joinDate
  });

  try {
    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update member
router.put('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (member) {
      Object.assign(member, req.body);
      const updatedMember = await member.save();
      res.json(updatedMember);
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete member
router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid member ID' });
    }
    const member = await Member.findById(req.params.id);
    if (member) {
      await member.deleteOne();
      res.json({ message: 'Member deleted' });
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  } catch (err) {
    console.error('Delete member error:', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 