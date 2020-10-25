import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2>Bem Vindo ao Nosso Site!</h2>
      <h3>Aproveite e conheça alguns dos nossos serviços!</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='imgs/background.jpg'
              text='Descrição Serviço, blah blah blah blah...'
              label='Serviço 1'
              path='/'
            />
            <CardItem
              src='imgs/background.jpg'
              text='Descrição Serviço, blah blah blah blah...'
              label='Serviço 2'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='imgs/background.jpg'
              text='Descrição Serviço, blah blah blah blah...'
              label='Serviço 3'
              path='/'
            />
            <CardItem
              src='imgs/background.jpg'
              text='Descrição Serviço, blah blah blah blah...'
              label='Serviço 4'
              path='/'
            />
            <CardItem
              src='imgs/background.jpg'
              text='Descrição Serviço, blah blah blah blah...'
              label='Serviço 5'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
