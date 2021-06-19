import { combineReducers } from "redux";
import myJobAdvertisementsReducer from "./reducers/myJobAdvertisementsReducer";

const rootReducer = combineReducers({
  myJobAdvertisements: myJobAdvertisementsReducer,
});

export default rootReducer;
