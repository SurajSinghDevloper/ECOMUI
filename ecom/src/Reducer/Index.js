import { combineReducers } from "redux";
import signup from "./Signup";


const rootReducer = combineReducers({
  auth: signup,
});

export default rootReducer;