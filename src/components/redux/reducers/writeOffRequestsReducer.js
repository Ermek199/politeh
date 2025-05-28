// redux/reducers/writeOffRequestsReducer.js

import {
    ADD_WRITE_OFF_REQUEST,
    APPROVE_WRITE_OFF_REQUEST,
    REJECT_WRITE_OFF_REQUEST,
  } from "../actions/writeOffRequestsActions";
  
  const initialState = {
    requests: [
      {
        id: 1,
        timestamp: "2025-05-28 10:00",
        user: "Иван Иванов",
        items: [
          {
            id: 1,
            name: "Товар 1",
            sku: "SKU001",
            quantity: 10,
            pricePerUnit: 100,
          }
        ],
        status: "ожидает" // "approved" или "rejected"
      }
    ],
  };
  
  
  export const writeOffRequestsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_WRITE_OFF_REQUEST:
        return {
          ...state,
          requests: [...state.requests, action.payload],
        };
      case APPROVE_WRITE_OFF_REQUEST:
        return {
          ...state,
          requests: state.requests.map((req) =>
            req.id === action.payload ? { ...req, status: "одобрен" } : req
          ),
        };
      case REJECT_WRITE_OFF_REQUEST:
        return {
          ...state,
          requests: state.requests.map((req) =>
            req.id === action.payload ? { ...req, status: "отклонен" } : req
          ),
        };
      default:
        return state;
    }
  };
  