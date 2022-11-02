import Task from './Task';
import TaskForm from './TaskForm';

const TaskList = () => {
  return (
    <div className="task-list">
      <h1 className="title">Task to do List</h1>
      <TaskForm />
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
