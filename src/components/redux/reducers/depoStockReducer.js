import {
    SET_DEPO_STOCK,
    ADD_DEPO_STOCK_ITEM,
    UPDATE_DEPO_STOCK_ITEM_QUANTITY,
    CLEAR_DEPO_STOCK,
  } from "../actions/depoStockActions";
  
  const initialState = {
    items: [],
  };
  
  const depoStockReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DEPO_STOCK:
        return {
          ...state,
          items: action.payload,
        };
  
      case ADD_DEPO_STOCK_ITEM:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
  
      case UPDATE_DEPO_STOCK_ITEM_QUANTITY:
        return {
          ...state,
          items: state.items.map((item) =>
            item.sku === action.payload.sku
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
  
      case CLEAR_DEPO_STOCK:
        return initialState;
  
      default:
        return state;
    }
  };
  
  export default depoStockReducer;
  