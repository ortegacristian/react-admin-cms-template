// Types
import { types } from '../types/types';

const initialState = {
  toggleActive: false,
  subLinksActive: [],
};

export const navigationReducer = (state = initialState, action) => {
  function setSubLinksActive(state, action) {
    const links = state.subLinksActive;
    // Buscamos si en el array ya tenemos el link
    const findLink = links.find((link) => link.id === action.payload.linkId);

    // Si lo encontramos le ponemos el valor contrario
    if (findLink) {
      findLink.active = !findLink.active;
    } else {
      // Si no existe, añadimos el link al array
      links.push({ id: action.payload.linkId, active: true });
    }

    return links;
  }

  switch (action.type) {
    case types.toggleNavigation:
      return {
        ...state,
        toggleActive: !state.toggleActive,
      };
    case types.collapseNavigationSubLinks:
      return {
        ...state,
        subLinksActive: setSubLinksActive(state, action),
      };
    default:
      return state;
  }
};

export default navigationReducer;
