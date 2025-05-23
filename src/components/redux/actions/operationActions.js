export const SET_HISTORY = "SET_HISTORY";
export const ADD_OPERATION = "ADD_OPERATION";

export const setHistory = (history) => ({
  type: SET_HISTORY,
  payload: history,
});

export const addOperation = (operation) => ({
  type: ADD_OPERATION,
  payload: operation,
});
