import React, { useRef } from 'react';

// useRef takes component style
// solving style problem in react issued ref methodic

// import Button from './Button';

import '../Card/Card.css';

const Card = ({ item }) => {
  const clickHandler = (e) => {
    //magic after push button
    console.log('button clicked');
    // e.target.classList.add('card__button--clicked');
    //////////////////////////////
    buttonRef.current.classList.add('card__button--clicked');
  };

  const buttonRef = useRef();
  return (
    <div className='card'>
      <h3 className='card__title'>{item.title}</h3>
      <p className='card__content'>{item.content}</p>
      {/* <Button
        text={item.buttonText}
        action={() => console.log('Heellow101')}
        primary
      />
      <Button
        text={item.buttonText}
        action={() => console.log('Heellow1011')}
        secondary
      /> 
      ///////////////////////// */}
      <button className='card__button' onClick={clickHandler} ref={buttonRef}>
        {item.buttonText}
      </button>
    </div>
  );
};

export default Card;

/*
B   -block
E   -element (block__element)
M   -modifier ()
*/
