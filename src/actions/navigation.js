// Types
import { types } from '../types/types';

export const toggleNavigation = () => ({
  type: types.toggleNavigation,
  payload: {},
});

export const collapseNavigationSubLinks = (linkId) => ({
  type: types.collapseNavigationSubLinks,
  payload: {
    linkId,
  },
});
