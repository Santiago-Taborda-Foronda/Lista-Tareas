import React from 'react';

export const ButtonFilter = ({ handleEvent, contentText, active }) => {
  return (
    <button
      onClick={handleEvent}
      className={`${
        active 
          ? 'bg-amber-500 text-white' 
          : 'bg-white text-gray-700'
      } border border-gray-300 py-2 px-4 rounded-lg hover:bg-amber-400 hover:text-white transition duration-200`}
    >
      {contentText}
    </button>
  );
};

