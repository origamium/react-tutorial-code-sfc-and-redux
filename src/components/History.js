import React from 'react';
import { pure } from 'recompose';

const jump = (move, nowStep, jumpTo) => () =>
  jumpTo(move - nowStep + 1);

const jumpToGameStart = (nowStep, jumpTo) => () =>
  jumpTo(-nowStep);

const moves = (history, nowStep, jumpTo) =>
  history.map((step, move) => (
    <li key={move}>
      <button onClick={jump(move, nowStep, jumpTo)}>{'Go to move #' + move}</button>
    </li>
  ));

const History = pure((props) => (
  <ol>
    <li>
      <button onClick={jumpToGameStart(props.step, props.jumpTo)}>
        {"Go to game start"}
      </button>
    </li>
    {moves(props.history, props.step, props.jumpTo)}
  </ol>
));

export default History;
