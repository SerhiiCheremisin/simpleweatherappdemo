import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducers/rootReducer';
import {rootSaga} from './saga/index';


const saga = createSagaMiddleware();

export const store = createStore(rootReducer,compose(applyMiddleware(saga),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

saga.run(rootSaga)