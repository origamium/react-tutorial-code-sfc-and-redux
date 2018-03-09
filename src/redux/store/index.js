import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import reducer from '../reducer';

const logger = createLogger({
    collapsed: true,
    duration: true,
});

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(logger)
    );
    return store;
}