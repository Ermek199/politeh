export const SET_STOCK = 'SET_STOCK';
export const ADD_STOCK_ITEM = 'ADD_STOCK_ITEM';
export const UPDATE_STOCK_ITEM_QUANTITY = 'UPDATE_STOCK_ITEM_QUANTITY';
export const CLEAR_STOCK = 'CLEAR_STOCK';

// Загрузить все остатки
export const setStock = (items) => ({
  type: SET_STOCK,
  payload: items,
});

// Добавить товар в остатки (после приёмки)
export const addStockItem = (item) => ({
  type: ADD_STOCK_ITEM,
  payload: item,
});

// Обновить количество (например, при списании)
export const updateStockItemQuantity = (sku, quantity) => ({
  type: UPDATE_STOCK_ITEM_QUANTITY,
  payload: { sku, quantity },
});

// Очистить все остатки (если нужно)
export const clearStock = () => ({
  type: CLEAR_STOCK,
});
