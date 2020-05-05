import { createStore } from 'redux';
import calculatorApp from './reducers';

const store = createStore(calculatorApp);

export default store;