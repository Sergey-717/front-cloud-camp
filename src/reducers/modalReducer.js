import initialState from "./initialState";

export default function modalReducer(state = initialState.modal, action) {
  switch (action.type) {
    case "TOGGLE_MODAL": {
      return {
        ...state,
        isModalActive: !state.isModalActive,
      };
    }
    case "SUCCESS_RESULT": {
      return {
        ...state,
        success: true,
      };
    }
    default:
      return state;
  }
}
