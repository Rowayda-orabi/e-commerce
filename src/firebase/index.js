import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA_s9pVi09uo6sHyX-iBB-hi9NRJB353Vc",
  authDomain: "vue-project-cfb02.firebaseapp.com",
  databaseURL: "https://vue-project-cfb02.firebaseio.com",
  projectId: "vue-project-cfb02",
  storageBucket: "vue-project-cfb02.appspot.com",
  messagingSenderId: "245108395781",
  appId: "1:245108395781:web:72d1385d81eb9898a6f16c",
  measurementId: "G-NYLQ624KEK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
