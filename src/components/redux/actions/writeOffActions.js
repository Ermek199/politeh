// actions/writeOffActions.js
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SET_QUANTITY = "SET_QUANTITY";
export const CLEAR_WRITE_OFF = "CLEAR_WRITE_OFF";

export const addItem = (item) => ({ type: ADD_ITEM, payload: item });
export const removeItem = (id) => ({ type: REMOVE_ITEM, payload: id });
export const setQuantity = (id, quantity) => ({
  type: SET_QUANTITY,
  payload: { id, quantity },
});
export const clearWriteOff = () => ({ type: CLEAR_WRITE_OFF });
