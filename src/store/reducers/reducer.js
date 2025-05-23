const initialState = {
  email: null,
  role: null,
  isAuthenticated: false,
};

const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        email: action.payload.email,
        role: action.payload.role,
        isAuthenticated: true,
      };
    case SIGN_OUT:
      return { ...initialState };
    default:
      return state;
  }
};

export const signIn = (email, role) => ({
  type: SIGN_IN,
  payload: { email, role },
});

export const signOut = () => ({ type: SIGN_OUT });
