import {
    SET_STOCK,
    ADD_STOCK_ITEM,
    UPDATE_STOCK_ITEM_QUANTITY,
    CLEAR_STOCK,
  } from '../actions/stockActions';
  
  const initialState = {
    items: [], // список остатков
  };
  
  const stockReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_STOCK:
        return {
          ...state,
          items: action.payload,
        };
  
      case ADD_STOCK_ITEM:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
  
      case UPDATE_STOCK_ITEM_QUANTITY:
        return {
          ...state,
          items: state.items.map((item) =>
            item.sku === action.payload.sku
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
  
      case CLEAR_STOCK:
        return initialState;
  
      default:
        return state;
    }
  };
  
  export default stockReducer;
  