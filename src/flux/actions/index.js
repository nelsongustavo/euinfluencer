import fire from './fire';
import { FETCH_VIDEOS, ADD_USER } from "./types";

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

export function addUser(user) {
  const usersRef = fire.database().ref('/users');
  return dispatch => {
    usersRef.set({
      user
    })
    .then(() => {
      dispatch({
        type: ADD_USER,
        payload: user
      });
    });
  }
}
