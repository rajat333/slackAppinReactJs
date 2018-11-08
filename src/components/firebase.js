
import firebase from 'firebase';

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyCKz_yuBC8biLTruzR_zYKbTMGPZtXVMnw",
    authDomain: "slack-app-621df.firebaseapp.com",
    databaseURL: "https://slack-app-621df.firebaseio.com",
    projectId: "slack-app-621df",
    storageBucket: "slack-app-621df.appspot.com",
    messagingSenderId: "109544196263"
  };
firebase.initializeApp(config);

export default firebase;