import {
    ADD_ITEM_TO_ORDER,
    REMOVE_ITEM_FROM_ORDER,
    CLEAR_ORDER,
  } from '../actions/orderActions';
  
  const initialState = {
    items: [],
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM_TO_ORDER:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case REMOVE_ITEM_FROM_ORDER:
        return {
          ...state,
          items: state.items.filter(item => item.sku !== action.payload),
        };
      case CLEAR_ORDER:
        return initialState;
      default:
        return state;
    }
  };
  
  export default orderReducer;
  