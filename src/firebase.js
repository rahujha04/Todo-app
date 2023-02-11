import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCV2GVia8LdvXGTIdV0FPoi-zvF7IB6U5k",
  authDomain: "to-do-app-83fed.firebaseapp.com",
  projectId: "to-do-app-83fed",
  storageBucket: "to-do-app-83fed.appspot.com",
  messagingSenderId: "1022857684292",
  appId: "1:1022857684292:web:7a6c8f567b3c5e30bf2311",
  measurementId: "G-4M3VGLDDFS"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };




// Rules: 

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if true;
//     }
//   }
// }