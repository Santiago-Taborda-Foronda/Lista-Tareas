import React from 'react';
import { useTaskContext } from '../context/contetxt';

export const Task = ({ task }) => {
  const { deleteTask, toggleComplete } = useTaskContext();

  return (
    <li className="w-full max-w-md mt-4">
      <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md flex items-start space-x-3 mt-2">
        <input
          className="mt-1"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <div className="flex-grow">
          <h2 className={`font-bold ${task.completed ? 'line-through text-gray-400' : ''}`}>
            {task.title}
          </h2>
          <p className={`text-gray-600 ${task.completed ? 'line-through text-gray-400' : ''}`}>
            {task.description}
          </p>
        </div>
        <button 
          onClick={() => deleteTask(task.id)} 
          className="bg-red-500 text-white py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};