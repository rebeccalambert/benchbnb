import { combineReducers } from "redux";
import benchReducer from "./benches_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  benches: benchReducer
});

export default entitiesReducer;