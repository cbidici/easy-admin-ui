import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import entityReducer from "./entityReducer";

export default combineReducers({
  form: formReducer,
  entities: entityReducer
});
