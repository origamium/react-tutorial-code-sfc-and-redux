import {combineReducers} from 'redux';
import undoable from 'redux-undo';
import game from './game';

export default combineReducers({
  game: undoable(game)
});
