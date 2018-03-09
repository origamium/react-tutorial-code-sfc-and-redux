import { createSelector } from 'reselect'

const gameDataSelector = state => state.game;

export const step = createSelector(
  gameDataSelector,
  state => state.past.length
);

export const squares = createSelector(
  gameDataSelector,
  state => state.present.squares
);

export const history = createSelector(
  gameDataSelector,
  state => [...state.past, ...state.future]
);

export const nowPlayer = createSelector(
  gameDataSelector,
  state => state.present.nowPlayer
);

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const hasWinner = createSelector(
  gameDataSelector,
  state => calculateWinner(state.present.squares)
);