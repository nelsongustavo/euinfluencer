import fire from '../../flux/actions/fire';

export default function leadTracker(page) {

  if (localStorage.user) {
    updateUserTracks(page);
  } else {
    addUserToStorage(page);
  }
}

function addUserToStorage(page) {
  const user = { "id": "", "name": "", "email": "", "tracks": [{"url": page, "date": new Date().toUTCString()}]};
  localStorage.user = JSON.stringify(user);
}

function updateUserTracks(page) {
  const user = JSON.parse(localStorage.user);
  const track = {"url": page, "date": new Date().toUTCString()};

  user.tracks.push(track);
  localStorage.user = JSON.stringify(user);

  if (hasEmail()) {
    addTrackData(user.id, track);
  }
}

function hasEmail() {
  const user = JSON.parse(localStorage.user);
  if (user.email !== "undefined") {
    return true
  } else {
    return false;
  }
}

function addTrackData(userId, track) {
  const tracksRef = fire.database().ref('users/' + userId + '/tracks');
  tracksRef.push(track);
}
