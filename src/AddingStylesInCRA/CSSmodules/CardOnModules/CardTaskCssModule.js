import React, { useState } from 'react';
//Component
//css
////importing image
import imageUrl from '../../../assets/35.jpg';
import CardTaskButton from '../../CardTaskButton';

//importing style  CSS MODULES
import style from './CardTask.module.css';

export default function CardTaskCssModule() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const item = {
    title: 'Ayrton Senna Lotus 97T Formula 1 Poster',
    price: '35.00',
    description: {
      0: 'Ayrton Senna, Lottus 97T Poster.',
      1: 'Posters series of legendary Sennas F1 cars',
      2: 'his is an original print illiustrated by me',
      3: 'All pieces are printed on heavyweight 250 GFT photo paper in a matt finish',
    },
  };
  return (
    <section className={style.section}>
      <h2>CSS</h2>
      <div className={style.main}>
        {' '}
        <img src={imageUrl} alt='' /> <div className={style.content}> </div>
        <div className={style.flex}>
          <h3 className={style.title}>{item.title}</h3>

          <p className={style.price}> {item.price} &euro;</p>
          <p className={style.description}>{item.description[0]}</p>
          <p className={style.description}>{item.description[1]}</p>
          <p className={style.description}>{item.description[2]}</p>
          <p className={style.description}>{item.description[3]}</p>
          {/* <p className={style.reminder}> item reminders first</p>
          <p className={style.reminder}> item reminders second</p> */}
          {/* <div className={style.tools}> */}

          <CardTaskButton
            text='-'
            action={decrement}
            className={style.button2}
          />
          <CardTaskButton text={count} />
          <CardTaskButton text='+' action={increment} />

          <button className={style.button}>Add To Cart</button>
        </div>
        <button className={style.arrow}> &lsaquo;</button>
        <button className={style.arrow}>&rsaquo;</button>
      </div>
    </section>
  );
}
