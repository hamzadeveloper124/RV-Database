// user management

export const API_STRUCTURE = "API_STRUCTURE";

const initial_state = {
  apiData: [],
};

const AuthReducer = (state = initial_state, action) => {
  switch (action.type) {
    case API_STRUCTURE:
      return {
        ...state,
        apiData: action.payload,
      };

    default: {
      return state;
    }
  }
};
export default AuthReducer;
