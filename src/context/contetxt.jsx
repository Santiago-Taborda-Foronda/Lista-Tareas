import { createContext, useContext, useState } from 'react';

// Creamos el contexto
export const TaskContext = createContext();

// Hook personalizado para usar el contexto
export const useTaskContext = () => useContext(TaskContext);

// Proveedor del contexto
export const TasksProvider = ({ children }) => {
  // Estados
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Funciones
  const addTask = (e) => {
    e.preventDefault();
    
    if (title.trim() === '' || description.trim() === '') {
      alert('Por favor completa todos los campos');
      return;
    }
    
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'active':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <TaskContext.Provider value={{
      title, setTitle,
      description, setDescription,
      tasks, setTasks,
      filter, setFilter,
      addTask,
      deleteTask,
      toggleComplete,
      getFilteredTasks
    }}>
      {children}
    </TaskContext.Provider>
  );
};

