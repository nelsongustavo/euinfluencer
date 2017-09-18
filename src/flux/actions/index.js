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

export function addUser(user, callback) {
  const userId = fire.database().ref('users').push().key;
  const usersRef = fire.database().ref('users/' + userId);
  user.id = userId;
  return dispatch => {
    usersRef.set(user)
    .then(() => {
      callback(userId);
    })
    .then(() => {
      dispatch({
        type: ADD_USER,
        payload: user
      });
    });
  }
}
