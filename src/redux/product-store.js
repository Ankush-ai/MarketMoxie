import { createStore } from 'redux';
import reducers from './reducers/index';

const prodStore = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//2nd param is the state

export default prodStore;