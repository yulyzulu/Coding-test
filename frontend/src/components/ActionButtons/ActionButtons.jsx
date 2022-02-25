import React from 'react';

const ActionButtons = ({setGreeting, setSayName, setFarewell}) => {
  return (
    <div className='buttons'>
      <button
        type='submit'
        className='btn btn-secondary rounded-pill '
        onClick={setGreeting}
      >
        Saludar
      </button>
      <button
        type='submit'
        className='btn btn-secondary rounded-pill'
        onClick={setSayName}
      >
        Nombre
      </button>
      <button
        type='submit'
        className='btn btn-secondary rounded-pill'
        onClick={setFarewell}
      >
        Despedir
      </button>
  </div>
  );
};

export default ActionButtons;