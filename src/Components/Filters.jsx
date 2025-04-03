import React from 'react';
import { ButtonFilter } from './ButtonFilter';
import { useTaskContext } from '../context/contetxt';

export const Filters = () => {
  const { filter, setFilter } = useTaskContext();

  return (
    <div className="flex space-x-2 mt-4 w-full justify-center items-center">
      <ButtonFilter
        handleEvent={() => setFilter('all')}
        contentText="Todas"
        active={filter === 'all'}
      />
      <ButtonFilter
        handleEvent={() => setFilter('active')}
        contentText="Pendientes"
        active={filter === 'active'}
      />
      <ButtonFilter
        handleEvent={() => setFilter('completed')}
        contentText="Completadas"
        active={filter === 'completed'}
      />
    </div>
  );
};

