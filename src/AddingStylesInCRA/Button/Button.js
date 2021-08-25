import React from 'react';
import './Button/Button.css';

const Button = ({ text, action, primary, secondary }) => {
  //   console.log('primary:   ', primary);
  //   console.log('secondary:   ', secondary);

  //   const buttonClass = primary
  //     ? 'button button-primary'
  //     : secondary
  //     ? 'button button - secondary'
  //     : 'button button-default';

  let buttonClass;

  if (primary) {
    buttonClass = 'button button-primary';
  } else if (secondary) {
    buttonClass = 'button button-secondary';
  } else {
    buttonClass = 'button button-default';
  }

  return (
    <button className={buttonClass} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
