import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDHiC_LATHl0oA1_PTNGiKzVKP9BrPkytI",
    authDomain: "money-manager-d6e2f.firebaseapp.com",
    databaseURL: "https://money-manager-d6e2f.firebaseio.com",
    projectId: "money-manager-d6e2f",
    storageBucket: "money-manager-d6e2f.appspot.com",
    messagingSenderId: "901528701503",
    appId: "1:901528701503:web:241a0a83954a986bc2468a",
    measurementId: "G-F382ND40DL"
  };

  firebase.initializeApp(firebaseConfig)

  firebase.database().ref().set({
      name: "daniel lackey"
  })