import React from 'react';
import './GameGenre.css';

export const GameGenre = ({ genre }) => {
  return (
    <span className='game_genre'>
        { genre  }
    </span>
  )
}
