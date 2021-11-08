import React from 'react';

// Estilos
import './index.scss';

export const Searcher = () => (
  <div className="search">
    <label htmlFor="search">
      <input type="text" id="search" placeholder="Search component" />
      <ion-icon name="search-outline" />
    </label>
  </div>
);

export default Searcher;
