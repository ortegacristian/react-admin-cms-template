// React
import React from 'react';
import { Provider } from 'react-redux';

// Rutas
import { AppRouter } from './AppRouter';

// Store
import { store } from './store/store';

export const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
