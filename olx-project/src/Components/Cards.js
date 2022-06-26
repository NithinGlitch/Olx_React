import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Ref.jpg'
              text='Cooling Your Items'
              label='Fridge'
              path='/products'
            />
            <CardItem
              src='images/Xuv.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mobile.jpg'
              text='Mobile phone'
              label='Mobile'
              path='/products'
            />
            <CardItem
              src='images/Car.jpg'
              text='Experience Car on Top of the Himilayan Mountains'
              label='Car'
              path='/products'
            />
            <CardItem
              src='images/House.jpg'
              text='Home sweet Home'
              label='House'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;