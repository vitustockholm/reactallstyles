import React from 'react';
import Card from '../Card/Card';

import './Cards.css'; //BEM convention

const Cards = ({ sectionTitle, cardsArray }) => {
  return (
    <section className='cards-section'>
      <h2 className='cards-section__title'>{sectionTitle}</h2>
      <div className='cards-section__cards'>
        {cardsArray.map((item) => (
          <Card item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
