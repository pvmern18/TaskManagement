import React from 'react';

const TaskList = ({ tasks = [], onEdit, onDelete }) => (
    <table className="table table-striped">
      <thead>
        <tr><th>Name</th><th>Description</th><th>Priority</th><th>Status</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map(task => (
            <tr key={task._id}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
              <td>
                <button onClick={() => onEdit(task)} className="btn btn-warning btn-sm me-2">Edit</button>
                <button onClick={() => onDelete(task._id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr><td colSpan="5">No tasks found</td></tr>
        )}
      </tbody>
    </table>
  );

  export default TaskList
  