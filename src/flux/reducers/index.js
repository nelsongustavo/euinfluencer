import { combineReducers } from "redux";
import videosReducer from "./reducer_videos";

const rootReducer = combineReducers({
  videos: videosReducer,
});

export default rootReducer;
