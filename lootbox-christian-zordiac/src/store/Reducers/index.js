import { combineReducers } from "redux";
// import { assetsReducer } from "../../store/assetsStore.js/reducer";
import { commonReducer } from "../commonStore/reducer";
import loginReducer from "../../store/loginStore/reducer";
import { userReducer } from "../userStore/reducer";
import data from "./data";

export default combineReducers({
  data,
  login: loginReducer,
  common: commonReducer,
  user: userReducer,
  // assets: assetsReducer,
});
