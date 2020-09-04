import * as firebase from "firebase/app"
import 'firebase/storage'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyBUeVsRJLsJyjoSFY0pDb5HIq0-59H8t9I",
    authDomain: "fireimages-af88a.firebaseapp.com",
    databaseURL: "https://fireimages-af88a.firebaseio.com",
    projectId: "fireimages-af88a",
    storageBucket: "fireimages-af88a.appspot.com",
    messagingSenderId: "398740454471",
    appId: "1:398740454471:web:f99c85a64a34e4dddec562"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};