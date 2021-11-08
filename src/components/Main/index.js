// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Componentes
import { TopBar } from '../TopBar';

// Estilos
import './index.scss';

export const Main = () => {
  // Obtenemos el estado del reducer Navigation
  const navigationState = useSelector((state) => state.navigation);

  // Miramos si tiene que mostrar o ocultar el menu de navegación
  const toggleActiveClass = (navigationState.toggleActive) ? ' active' : '';

  return (
    <div className={`main${toggleActiveClass}`}>
      <TopBar />
      <div className="details" />
    </div>
  );
};

export default Main;
