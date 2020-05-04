import { createStore } from 'redux';
import calculatorApp from './reducers';

import { updateScreen } from './actions'

const store = createStore(calculatorApp);

export default store;