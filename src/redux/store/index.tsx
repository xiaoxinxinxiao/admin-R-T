import { createStore, applyMiddleware} from 'redux';
import  reducer  from '../reducer/index';
import { createLogger } from 'redux-logger';
const logger = createLogger({});

const store = createStore(reducer, applyMiddleware(logger));
export default store;

