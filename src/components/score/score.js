import React from 'react';
import './score.css';

const Score = props => {
  return (
    <div className='Score'>
      <p>Score: {props.score}</p>
    </div>
  );
};

export default Score;
