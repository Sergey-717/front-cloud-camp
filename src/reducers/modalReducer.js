import initialState from "./initialState";

export default function modalReducer(state = initialState.modal, action) {
  switch (action.type) {
    case "TOGGLE_MODAL": {
      return {
        ...state,
        isModalActive: !state.isModalActive,
      };
    }
    case "RESULT": {
      return {
        ...state,
        ...state.modal,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
