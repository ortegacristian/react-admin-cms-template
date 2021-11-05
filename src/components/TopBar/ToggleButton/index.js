import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Acciones de redux
import { toggleNavigation } from '../../../actions/navigation';

export const ToggleButton = () => {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(toggleNavigation());
  }

  return (
    <div className="toggle" onClick={onClick} onKeyUp={onClick} role="button" tabIndex={0}>
      <ion-icon name="menu-outline" />
    </div>
  );
};

export default ToggleButton;
