import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Task from './Task';
import TaskForm from './TaskForm';
import axios from 'axios';
import { URL } from '../App';
import loaderImg from '../assets/loader.gif';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [Loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    completed: false,
  });
  const { name } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getTasks = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/tasks`);
      setTasks(data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();

    if (name === '') {
      return toast.error('Input field cannot be empty');
    }

    try {
      await axios.post(`${URL}/api/tasks`, formData);
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
      {Loading && (
        <div className="flex-center">
          <img src={loaderImg} alt="Loading" />
        </div>
      )}
      {!Loading && tasks.length === 0 ? (
        <p className="no-task">No task added.</p>
      ) : (
        <>
          {tasks.map((task, index) => {
            return <Task key={task.id} task={task} index={index} />;
          })}
        </>
      )}
    </div>
  );
};

export default TaskList;
