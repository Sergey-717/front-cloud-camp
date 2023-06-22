import initialState from "./initialState";

export default function userReducer(state = initialState.newUser, action) {
  switch (action.type) {
    case "ADD_NEW_USER": {
      return {
        ...state,

        ...state.newUser,
        ...action.payload,
      };
    }
    case "HANDLE_INPUT_CHANGE": {
      return {
        ...state,
        ...state.newUser,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
