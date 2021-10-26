// React
import { createStore, combineReducers } from 'redux';

// Reducers
import { navigationReducer } from '../reducers/navigationReducer';

const reducers = combineReducers({
  navigation: navigationReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
