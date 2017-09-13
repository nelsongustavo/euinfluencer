import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyA8dujLpKHpDEX-o_HCIv1qrkPLYn04P9M",
    authDomain: "euinfluencer.firebaseapp.com",
    databaseURL: "https://euinfluencer.firebaseio.com",
    projectId: "euinfluencer",
    storageBucket: "euinfluencer.appspot.com",
    messagingSenderId: "450208615160"
};

var fire = firebase.initializeApp(config);
export default fire;
