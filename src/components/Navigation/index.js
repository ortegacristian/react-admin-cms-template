// React
import React from 'react';
import { useSelector } from 'react-redux';

// Constantes
import navigationLinks from '../../constants/Navigation';

// Componentes
import { NavigationLink } from './NavigationLink';

// Constantes

export const Navigation = () => {
  // Recuperamos el estado del reducer Navigation
  const navigationState = useSelector((state) => state.navigation);

  // Miramos si tiene que mostrar o ocultar el menu de navegación
  const toggleActiveClass = (navigationState.toggleActive) ? ' active' : '';

  return (
    <div className={`navigation${toggleActiveClass}`}>
      <ul>
        {navigationLinks.map((navigationLink) => <NavigationLink key={navigationLink.id} navigationLink={navigationLink} />)}
      </ul>
    </div>
  );
};

export default Navigation;
