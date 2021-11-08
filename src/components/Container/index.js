// React
import React from 'react';

// Componentes
import { Navigation } from '../Navigation';
import { Main } from '../Main';

// Estilos
import './index.scss';

export const Container = () => (
  <div className="container">
    <Navigation />
    <Main />
  </div>
);

export default Container;
