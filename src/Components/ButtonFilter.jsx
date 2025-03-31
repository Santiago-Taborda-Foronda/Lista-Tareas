import React from 'react'

export const ButtonFilter = ({handleEvent, contentText}) => {
  return (
    <button
        onClick={handleEvent}
        className='bg-white border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200'
    >
        {contentText}
    </button>
  )
}
