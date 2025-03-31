import './App.css'
import { useState } from 'react'

import React from 'react'

export const App = () => {

  const [task, setTask] = useState({title: '',description:''})
  const [listTask, setListTask] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if(!task.title.trim() || !task.description.trim()) return

    const newTask = {
      id: Date.now(),
      title: task.title,
      description: task.description,
      completed: false
    }

    setListTask([...listTask, newTask])
    setTask({title: '', description: '' })
  }

  return (
    <>
  <div className='h-screen w-screen flex justify-center items-center flex-col bg-gray-100'>
    <h1 className='text-4xl font-bold text-gray-800 mb-6'>Lista de Tareas</h1>


    <form onSubmit={addTask} className='flex flex-col space-y-5 w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
      <input className='bg-amber-200 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400' 
        type='text' 
        placeholder='Nombre tarea'
        value={task.title}
        onChange={(e) => setTask({...task, title: e.target.value})} 
      />
      <textarea className='bg-amber-200 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400' 
      placeholder='Descripción'
      value={task.description}
      onChange={(e) =>setTask({...task, description: e.target.value})}
      ></textarea>
      <button className='bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-200'>Agregar Tarea</button>
    
      <div className='flex space-x-2 mt-4 w-full justify-center items-center'>
        <button className='bg-white border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200'>All</button>
        <button className='bg-white border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200'>Pending</button>
        <button className='bg-white border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200'>Completed</button>
      </div>
    </form>

    <ul>
      {listTask.map(task => (
        <li key={task.id} className="w-full max-w-md mt-4">
          <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md flex items-start space-x-3 mt-2">
            <input type="checkbox" className="mt-1" />
              <div>
                <h2 className="font-bold">{task.title}</h2>
                <p className="text-gray-600">{task.description}</p>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white py-1 px-3 rounded"
              >
              Delete
              </button>
          </div>
        </li>
      ))}
    </ul>
</div>

</>

  )
}

