import React, { useState, useEffect } from 'react';
import { addTask, updateTask } from '../services/taskService.js';

const TaskForm = ({ task, onTaskSaved }) => {
  const [formData, setFormData] = useState({
    name: '', description: '', priority: 'Low', status: 'To Do'
  });

  useEffect(() => {
    setFormData(task || { name: '', description: '', priority: 'Low', status: 'To Do' });
  }, [task]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    task ? await updateTask(task._id, formData) : await addTask(formData);
    onTaskSaved();
    alert("task is added ")
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Task Name" className="form-control mb-2" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="form-control mb-2" required />
      <select name="priority" value={formData.priority} onChange={handleChange} className="form-select mb-2">
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <select name="status" value={formData.status} onChange={handleChange} className="form-select mb-2">
        <option>To Do</option><option>In Progress</option><option>Completed</option>
      </select>
      <button type="submit" className="btn btn-primary w-100">{task ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;