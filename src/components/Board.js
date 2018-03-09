import React from 'react'
import { pure } from 'recompose';

const handleClick = (sq, hasWinner) => (
  squareIsNull(sq) && hasWinner === null ?
    (boardClicked, index) => () => boardClicked({ clickedSquare: index }) :
    (boardClicked, index) => null // do nothing
);

const squareIsNull = sq => (
  sq === null
);

const squareContent = sq => (
  squareIsNull(sq) ? '' : sq
);

const renderSquare = (i, props) => {
  const square = props.squares[i];
  return (
    <button
      className="square"
      onClick={handleClick(square, props.hasWinner)(props.boardClicked, i)}>
      {squareContent(square)}
    </button>
  )
};

const Board = pure((props) => (
  <div className="square-container">
    {props.squares.map((item, index) => (
      <span key={index}>
        {renderSquare(index, props)}
      </span>
    ))}
  </div>
));

export default Board;