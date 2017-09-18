import { combineReducers } from "redux";
import videosReducer from "./reducer_videos";
import userReducer from "./reducer_users";

const rootReducer = combineReducers({
  videos: videosReducer,
  user: userReducer
});

export default rootReducer;
