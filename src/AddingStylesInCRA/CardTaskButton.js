import React from 'react';
import './CardTask.css';

const CardTaskButton = ({ text, action }) => {
  return (
    <button className='CardTaskButtonas' onClick={action}>
      {text}
    </button>
  );
};

export default CardTaskButton;
