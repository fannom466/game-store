import React from 'react';
import { Button } from '../Button';
import './GameBuy.css';

export const GameBuy = ({ game }) => {
  return (
    <div className='game_buy'>
        <span className='prise'>{game.price} usa.</span>
        <Button
        type='primary'
         onClick={() => null}
         > в корзину
         </Button>
    </div>
  )
}
