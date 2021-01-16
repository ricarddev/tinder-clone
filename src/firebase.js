import firebase from 'firebase';


const firebaseConfig = {
    
//     PASTE UR CONFIG FROM UR FIREBASE SETTINGS
//     apiKey: "YOUR API KEY ",
//     authDomain: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//     measurementId: ""
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;
