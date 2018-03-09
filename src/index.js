import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './redux/store';
import Game from './containers/game';

ReactDOM.render(
  <Provider store={store()}>
    <Game />
  </Provider>,
  document.getElementById('root'));
