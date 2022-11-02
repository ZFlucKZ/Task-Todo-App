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

router.route('/').get(getTasks).post(createTask);

router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

// router.post('/', createTask);
// router.get('/', getTasks);
// router.get('/:id', getTask);
// router.delete('/:id', deleteTask);
// router.put('/:id', updateTask);

module.exports = router;
