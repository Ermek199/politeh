// reducers/writeOffReducer.js
import { ADD_ITEM, REMOVE_ITEM, SET_QUANTITY, CLEAR_WRITE_OFF } from "../actions/writeOffActions";

const initialState = {
  selectedItems: [],  // [{id, name, sku, expected, unit, expiryDate, pricePerUnit}]
  quantities: {},     // { [id]: quantity }
};

export const writeOffReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // Не добавляем, если уже есть
      if (state.selectedItems.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
        quantities: { ...state.quantities, [action.payload.id]: "" },
      };
    case REMOVE_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(item => item.id !== action.payload),
        quantities: Object.fromEntries(
          Object.entries(state.quantities).filter(([key]) => Number(key) !== action.payload)
        ),
      };
    case SET_QUANTITY:
      return {
        ...state,
        quantities: {
          ...state.quantities,
          [action.payload.id]: action.payload.quantity,
        },
      };
    case CLEAR_WRITE_OFF:
      return initialState;
    default:
      return state;
  }
};
