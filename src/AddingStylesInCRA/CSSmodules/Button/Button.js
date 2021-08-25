import React from 'react';
import styles from './Button.module.css';

const Button = ({ primary, secondary }) => {
  let buttonClass;
  if (primary) buttonClass = styles.primary;
  if (secondary) buttonClass = styles.secondary;

  return <button className={buttonClass}>Click me</button>;
};

export default Button;
