// redux/actions/writeOffRequestsActions.js

export const ADD_WRITE_OFF_REQUEST = "ADD_WRITE_OFF_REQUEST";
export const APPROVE_WRITE_OFF_REQUEST = "APPROVE_WRITE_OFF_REQUEST";
export const REJECT_WRITE_OFF_REQUEST = "REJECT_WRITE_OFF_REQUEST";

export const addWriteOffRequest = (request) => ({
  type: ADD_WRITE_OFF_REQUEST,
  payload: request,
});

export const approveWriteOffRequest = (id) => ({
  type: APPROVE_WRITE_OFF_REQUEST,
  payload: id,
});

export const rejectWriteOffRequest = (id) => ({
  type: REJECT_WRITE_OFF_REQUEST,
  payload: id,
});
