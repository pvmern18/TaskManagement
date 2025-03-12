import React, { useState, useEffect } from 'react';
import { getTasks, deleteTask } from '../services/taskService.js';
import TaskForm from '../components/TaskForm.js';
import TaskList from '../components/TaskList.js';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(Array.isArray(data) ? data : []); 
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setTasks([]); 
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleEdit = (task) => setEditingTask(task);

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleTaskSaved = () => {
    setEditingTask(null);
    fetchTasks();
  };

  return (<>
  <p className='fs-5 d-flex justify-content-center mt-5'>Task <span className='text-primary'>Mangemet</span></p>
    <div className="container mt-4">
      <TaskForm task={editingTask} onTaskSaved={handleTaskSaved} />
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
    </>
  );
};

export default Dashboard;