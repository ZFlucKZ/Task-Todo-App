import { useState } from 'react';
import { toast } from 'react-toastify';
import Task from './Task';
import TaskForm from './TaskForm';
import axios from 'axios';

const TaskList = () => {
  const [formData, setFormData] = useState({
    name: '',
    completed: false,
  });
  const { name } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createTask = async (e) => {
    e.preventDefault();

    if (name === '') {
      return toast.error('Input field cannot be empty');
    }

    try {
      await axios.post('http://localhost:5000/api/tasks', formData);
      toast.success('Task added successfully');
      setFormData({ ...formData, name: '' });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="task-list">
      <h1 className="title">Task to do List</h1>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
      <div className="flex-between">
        <p>
          <b>Total Tasks:</b> 0
        </p>
        <p>
          <b>Completed Tasks:</b> 0
        </p>
      </div>
      <hr />
      <Task />
    </div>
  );
};

export default TaskList;
