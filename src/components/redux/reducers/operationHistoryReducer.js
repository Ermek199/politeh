import { SET_HISTORY, ADD_OPERATION } from "../actions/operationActions";

const initialState = {
  list: [],
};

const operationHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        list: action.payload,
      };
    case ADD_OPERATION:
      return {
        ...state,
        list: [action.payload, ...state.list], // новые сверху
      };
    default:
      return state;
  }
};

export default operationHistoryReducer;
