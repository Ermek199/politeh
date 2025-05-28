import { createStore, combineReducers } from 'redux';
import { userReducer } from './reducers/reducer';
import bottomPanelReducer from "../components/redux/reducers/bottomPanelReducer"
import modalReducer from "../components/redux/reducers/modalReducer"
import orderReducer from "../components/redux/reducers/orderReducer"
import stockReducer from '../components/redux/reducers/stockReducer';
import operationHistoryReducer from '../components/redux/reducers/operationHistoryReducer';
import productsReducer from '../components/redux/reducers/productsReducer';
import depoStockReducer from '../components/redux/reducers/depoStockReducer';
import {writeOffRequestsReducer} from '../components/redux/reducers/writeOffRequestsReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  bottomPanel: bottomPanelReducer,
  orderForm: orderReducer,
  stock: stockReducer,
  products: productsReducer,
  operationHistory: operationHistoryReducer,
  depoStock: depoStockReducer,
  writeOffRequests: writeOffRequestsReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
