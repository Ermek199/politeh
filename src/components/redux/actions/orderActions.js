export const ADD_ITEM_TO_ORDER = 'ADD_ITEM_TO_ORDER';
export const REMOVE_ITEM_FROM_ORDER = 'REMOVE_ITEM_FROM_ORDER';
export const CLEAR_ORDER = 'CLEAR_ORDER';

export const addItemToOrder = (item) => ({
  type: ADD_ITEM_TO_ORDER,
  payload: item,
});

export const removeItemFromOrder = (sku) => ({
  type: REMOVE_ITEM_FROM_ORDER,
  payload: sku,
});

export const clearOrder = () => ({
  type: CLEAR_ORDER,
});
