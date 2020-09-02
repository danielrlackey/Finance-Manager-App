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

export { firebase, dataBase as default };


// dataBase.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// dataBase.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });


// dataBase.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// dataBase.ref("expenses")
//   .on("value", (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses)
//   });

  


// dataBase.ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//    const expenses = [];

//    snapshot.forEach((childSnapshot) => {
//     expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//     });
//    });

//    console.log(expenses);
//   });



// dataBase.ref("expenses").push({
//     description: "rent",
//     note: "my rent",
//     amount: 124567,
//     createdAt: 4756085
// });



// dataBase.ref("notes/-MG59W9bq66qEKENnNKe").remove();

// dataBase.ref().on("value", (snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });


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


