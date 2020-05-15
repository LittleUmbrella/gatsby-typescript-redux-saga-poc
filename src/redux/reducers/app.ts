import { TOGGLE_DARKMODE, INCREMENT } from '../actions/app'
import { initialState } from '../state/app'

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode };
    case INCREMENT:
      return { ...state, num: state.num + action.amount };
    default:
      return state;
  }
};