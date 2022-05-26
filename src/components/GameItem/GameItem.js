import React from 'react';
import { GameCover } from '../GameCover';
import { GameBuy } from '../GameBuy';
import { GameGenre } from '../GameGenre';
import './GameItem.css';


export const  GameItem = ({ game }) => {
  return (
    <div className='game_item'>
    <GameCover image= {game.image}/>
    <div className='game_item__details'>
        <span className='game_item__title'>{game.title}</span>
        <div className='game_item__genre'>
            {game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}
        </div>
        <div className='game_item__buy'>
          <GameBuy game = { game }/>
        </div>
          </div>
            </div>
  )
}
