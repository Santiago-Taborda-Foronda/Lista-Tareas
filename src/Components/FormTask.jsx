import React from 'react';
import { useTaskContext } from '../context/contetxt';

export const FormTask = () => {
  const { title, setTitle, description, setDescription, addTask } = useTaskContext();

  return (
    <form onSubmit={addTask} className='flex flex-col space-y-5 w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
      <input 
        className='bg-amber-200 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400'
        type='text'
        placeholder='Nombre tarea'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        className='bg-amber-200 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400'
        placeholder='Descripción'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button 
        className='bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-200'
        type="submit"
      >
        Agregar Tarea
      </button>
    </form>
  );
};