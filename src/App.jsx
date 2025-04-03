import React from 'react';
import './App.css';

import { FormTask } from './Components/FormTask';
import { Filters } from './Components/Filters';
import { ListTasks } from './Components/ListTasks';

export const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800 mb-6'>Lista de Tareas</h1>
      <FormTask />
      <Filters />
      <ListTasks />
    </div>
  );
};