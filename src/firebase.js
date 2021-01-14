import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBle0Y0PotChI-YT5D_7i2WbWNB7ibahoM",
    authDomain: "tinder-clone-abb9f.firebaseapp.com",
    projectId: "tinder-clone-abb9f",
    storageBucket: "tinder-clone-abb9f.appspot.com",
    messagingSenderId: "424020547959",
    appId: "1:424020547959:web:b59a335ecb4839a08ea972",
    measurementId: "G-Q9N6340HJD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;