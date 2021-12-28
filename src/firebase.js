import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUa_UIW9btUDRF0n2-YsYSMAVGR8ooclE",
    authDomain: "twitter-clone-d829b.firebaseapp.com",
    projectId: "twitter-clone-d829b",
    storageBucket: "twitter-clone-d829b.appspot.com",
    messagingSenderId: "578731674684",
    appId: "1:578731674684:web:e08263723686855b454739",
    measurementId: "G-T8J3SKRSPX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;

  