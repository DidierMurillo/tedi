import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPMabMEtzsLPQM-hoYaL6VuR06JDnrLGE",
    authDomain: "tedi-f1178.firebaseapp.com",
    databaseURL: "https://tedi-f1178.firebaseio.com",
    projectId: "tedi-f1178",
    storageBucket: "tedi-f1178.appspot.com",
    messagingSenderId: "672646980389",
    appId: "1:672646980389:web:d3c009f10b574380fcf0cc",
    measurementId: "G-CSGW4JTNGM"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;