import { reducer as userReducer } from "./UserReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

