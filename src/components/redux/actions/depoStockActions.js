export const SET_DEPO_STOCK = 'SET_DEPO_STOCK';
export const ADD_DEPO_STOCK_ITEM = 'ADD_DEPO_STOCK_ITEM';
export const UPDATE_DEPO_STOCK_ITEM_QUANTITY = 'UPDATE_DEPO_STOCK_ITEM_QUANTITY';
export const CLEAR_DEPO_STOCK = 'CLEAR_DEPO_STOCK';

export const setDepoStock = (items) => ({
  type: SET_DEPO_STOCK,
  payload: items,
});

export const addDepoStockItem = (item) => ({
  type: ADD_DEPO_STOCK_ITEM,
  payload: item,
});

export const updateDepoStockItemQuantity = (sku, quantity) => ({
  type: UPDATE_DEPO_STOCK_ITEM_QUANTITY,
  payload: { sku, quantity },
});

export const clearDepoStock = () => ({
  type: CLEAR_DEPO_STOCK,
});
