import * as firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyAeTa979quYAduvOK2DTjVL2o2RDbm4hWY",
    authDomain: "wily-74574.firebaseapp.com",
    projectId: "wily-74574",
    storageBucket: "wily-74574.appspot.com",
    messagingSenderId: "108589200661",
    appId: "1:108589200661:web:e1e5b7c731a60dc3ac251c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()