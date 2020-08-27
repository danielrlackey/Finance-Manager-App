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

const onValueChange = dataBase.ref().on("value", (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
 console.log("error with data fetching", e )
});
  
setTimeout(() => {
    dataBase.ref("age").set(29);
}, 3500);

setTimeout(() => {
    dataBase.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    dataBase.ref("age").set(30);
}, 10500);

// dataBase.ref("location/city").once("value")
//   .then((snapshot) => {
//    const val = snapshot.val();
//    console.log(val);
//   }).catch((e) => {
//     console.log("error fetching data", e);
//   });


//   dataBase.ref().set({
//       name: "daniel lackey",
//       age: 30,
//       stressLevel: 6,
//       job: {
//           title: "software developer",
//           company: "google"
//       },
//       location: {
//           city: "st.petersburg",
//           country: "united states"
//       }
//   }).then(() => {
//     console.log("data is saved")
//   }).catch((e) => {
//     console.log("this failed", e)
//   })

//   dataBase.ref().update({
//       stressLevel: 9,
//       "job/company": "amazon",
//       "location/city": "seattle"
//   });

// dataBase.ref("isSingle").remove()
//   .then(() => {
//       console.log("data was")
//   }).catch((e) => {
//       console.log("did not remove data", e)
//   })


