const initialState = { authData: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      // localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));

      return {
        ...state,
        authData: action.payload,
      };
    case "LOGOUT":
      // localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
