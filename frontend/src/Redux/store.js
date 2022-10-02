import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./auth/reducer";
import { ProjectReducer } from "./project/reducer";
import { TaskReducer } from "./tasks/reducer";
import { TagReducer } from "./tag/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({ AuthReducer, ProjectReducer,TaskReducer,TagReducer });

export const store = legacy_createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
