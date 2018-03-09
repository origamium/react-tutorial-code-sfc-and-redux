import { handleActions } from 'redux-actions';
import * as types from '../constants';
import player from '../../util/player';

const initState = {
  nowPlayer: player.player.O,
  squares: Array(9).fill(null),
};

export default handleActions({
  [types.BOARD_CLICKED]: (state, action) => ({
    nowPlayer: player.nextPlayer(state.nowPlayer),
    squares: state.squares.map((item, index) => (
      action.payload.clickedSquare === index ? state.nowPlayer : item
    ))
  }),
}, initState);