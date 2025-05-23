import { OPEN_BOTTOM_PANEL, CLOSE_BOTTOM_PANEL } from '../actions/bottomPanelActions';

const initialState = {
  isOpen: false,
  title: '',
  contentKey: null, // для переключения содержимого внутри панели
};

const bottomPanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_BOTTOM_PANEL:
      return {
        ...state,
        isOpen: true,
        title: action.payload.title,
        contentKey: action.payload.contentKey,
      };
    case CLOSE_BOTTOM_PANEL:
      return {
        ...state,
        isOpen: false,
        title: '',
        contentKey: null,
      };
    default:
      return state;
  }
};

export default bottomPanelReducer;
