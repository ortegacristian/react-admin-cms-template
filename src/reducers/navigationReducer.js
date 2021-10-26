// Types
import { types } from '../types/types';

const initialState = {
  toggleActive: false,
};

export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.toggle:
      return {
        toggleActive: !state.toggleActive,
      };
    default:
      return state;
  }
};

export default navigationReducer;
