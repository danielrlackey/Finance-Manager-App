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

const dataBase = firebase.database()

  dataBase.ref().set({
      name: "daniel lackey",
      age: 30,
      isSingle: false,
      location: {
          city: "st.petersburg",
          state: "florida",
          country: "united states"
      }
  }).then(() => {
    console.log("data is saved")
  }).catch((e) => {
    console.log("this failed", e)
  })

//   dataBase.ref().set("this is my data");

dataBase.ref("age").set(31);
dataBase.ref("location/city").set("tampa");


dataBase.ref("attributes").set({
    height: "5ft 7in",
    weight: "210lbs"
}).then(() => {
    console.log("it is working")
}).catch((e) => {
    console.log("is not working ", e)
});

