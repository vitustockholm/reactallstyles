import React, { useState } from 'react';
/////////////11111111111111111111111111
import photo from '../assets/35.jpg';
import CardTaskButton from './CardTaskButton';
//BEM styling
import './CardTask.css';

const CardTask = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <section className='main-section'>
      <h2 className='bem'>BEM</h2>
      <div>
        <img className='image' src={photo} alt='' />
      </div>
      <div className='main-section__context'>
        <h2>Ayrton Senna Lotus 97T Formula 1 Poster</h2>
        <h2>
          <b>35.00$</b>
        </h2>
        <p>Ayrton Senna, Lottus 97T Poster.</p>
        <p>Posters series of legendary Sennas F1 cars</p>
        <p>This is an original print illiustrated by me</p>
        <p>
          All pieces are printed on heavyweight 250 GFT photo paper in a matt
          finish
        </p>
        <br />
        <CardTaskButton text='-' action={decrement} />
        <CardTaskButton text={count} />
        <CardTaskButton text='+' action={increment} />
        <button className='main-section__button'>Add To Cart</button>
      </div>
      <button className='arrow'>&lsaquo;</button>
      <button className='arrow'>&rsaquo;</button>
    </section>
  );
};

export default CardTask;
