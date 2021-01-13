// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDMPKYC-WoWvhXyMRC39l5RhjZN85xnQMU",
  authDomain: "react-project-tracker.firebaseapp.com",
  projectId: "react-project-tracker",
  storageBucket: "react-project-tracker.appspot.com",
  messagingSenderId: "816913996038",
  appId: "1:816913996038:web:963831971569d615d1a687",
  measurementId: "G-F4FXDNTPLV",
};

// Initialize the app / connect this frontend to the firebase backend
// passes in the above object ^^
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Access to the database
const db = firebaseApp.firestore();
// set up auth
const auth = firebase.auth();
//Set up firebase provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
