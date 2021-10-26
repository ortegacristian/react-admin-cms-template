// React
import React from 'react';
import { useSelector } from 'react-redux';

// Componentes
import { NavigationLink } from './NavigationLink';

export const Navigation = () => {
  const navigationLinks = [
    { id: 1, icon: 'home-outline', title: 'Brand Name' },
    { id: 2, icon: 'home-outline', title: 'Dashboard' },
    { id: 3, icon: 'settings-outline', title: 'Settings' },
    { id: 4, icon: 'log-out-outline', title: 'Sing Out' },
  ];

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
