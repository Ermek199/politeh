import { ADD_PRODUCT } from "../actions/createProductActions";

const initialState = {
  products: [],
};

const createProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default createProductReducer;
