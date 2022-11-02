const express = require('express');
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require('../controllers/taskController');
const Task = require('../models/taskSchema');
const router = express.Router();

// Create a Task
router.post('/api/tasks', createTask);
// Get/Read Data
router.get('/api/tasks', getTasks);
router.get('/api/tasks/:id', getTask);
router.delete('/api/tasks/:id', deleteTask);
router.patch('/api/tasks/:id', updateTask);

module.exports = router;
