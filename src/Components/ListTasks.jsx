import React from 'react';
import { Task } from './Task';
import { useTaskContext } from '../context/contetxt';

export const ListTasks = () => {
  const { getFilteredTasks } = useTaskContext();
  const filteredTasks = getFilteredTasks();

  return (
    <ul>
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))
      ) : (
        <li className="text-center text-gray-500 mt-4">No hay tareas disponibles</li>
      )}
    </ul>
  );
};