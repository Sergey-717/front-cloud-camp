import { combineReducers } from "redux";
import userReducer from "./userReducer";
import uiReducer from "./modalReducer";

const rootReducer = combineReducers({
  newUser: userReducer,
  modal: uiReducer,
});

export default rootReducer;
