const express = require('express');
const { createTask, getTask } = require('../controllers/taskController');
const Task = require('../models/taskSchema');
const router = express.Router();

// Create a Task
router.post('/api/tasks', createTask);
// Get/Read Data
router.get('/api/tasks', getTask);

module.exports = router;
