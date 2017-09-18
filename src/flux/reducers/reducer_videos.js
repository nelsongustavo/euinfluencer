import _ from "lodash";
import { FETCH_VIDEOS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return { "data": action.payload, current: _.find(action.payload, "current")};
    default:
      return state;
  }
}
