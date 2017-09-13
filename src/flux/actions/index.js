import fire from './fire';
import { FETCH_VIDEOS } from "./types";

const videosRef = fire.database().ref('videos');

export function fetchVideos() {
  return dispatch => {
    videosRef.on('value', snap => {
      dispatch({
        type: FETCH_VIDEOS,
        payload: snap.val()
      });
    });
  }
}
