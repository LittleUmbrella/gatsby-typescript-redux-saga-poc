export const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const INCREMENT = 'INCREMENT';

export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE, isDarkMode
});

export const incrementAsync = amount => ({
  type: INCREMENT_ASYNC, amount
});