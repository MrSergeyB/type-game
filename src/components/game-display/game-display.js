import React from 'react';
import './game-display.css';
import RandomWord from '../random-word';
import Time from '../time';
import Score from '../score';
import Input from '../input';

const GameDisplay = () => {
  return (
    <div className='game-display'>
      <header>Speed Typer</header>
      <Time />
      <Score />
      <RandomWord />
      <Input />
    </div>
  );
};

export default GameDisplay;
