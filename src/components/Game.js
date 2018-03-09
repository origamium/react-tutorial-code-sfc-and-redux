import React from 'react';
import { pure } from 'recompose';

import Board from './Board';
import History from './History';

const status = (winner, nowPlayer) =>
  winner ? 'Winner: ' + winner : 'Next player: ' + nowPlayer;

const Game = pure((props) => (
  <div className="game">
    <div className="game-board">
      <Board {...props} />
    </div>
    <div className="game-info">
      <div>{status(props.hasWinner, props.nowPlayer)}</div>
      <History {...props} />
    </div>
  </div>
));

export default Game;
