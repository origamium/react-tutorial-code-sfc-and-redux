import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import actions from "../redux/actions";
import * as selectors from '../redux/selectors/app';
import Component from "../components/Game";

console.log(UndoActionCreators);

const mapStateToProps = state => ({
  step: selectors.step(state),
  nowPlayer: selectors.nowPlayer(state),
  squares: selectors.squares(state),
  history: selectors.history(state),
  hasWinner: selectors.hasWinner(state),
});

const mapDispatchToProps = dispatch => ({
  boardClicked: bindActionCreators(actions.boardClicked, dispatch),
  jumpTo: bindActionCreators(UndoActionCreators.jump, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
