import React from 'react'
import { ButtonFilter } from './ButtonFilter'

export const Filters = () => {
  return (
    <div className=''>
        <ButtonFilter
            handleEvent={() => console.log("All tasks")}
            contentText="All"
        />
        <ButtonFilter
            handleEvent={() => console.log("Active tasks")}
            contentText="Activado"
        />
        <ButtonFilter
            handleEvent={() => console.log("Completed tasks")}
            contentText="Completado"
        />
    </div>
  )
}
