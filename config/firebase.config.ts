// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpEeejKspTiIEuwkG38A_gXD_tTRsSUN0",
  authDomain: "reviewgush.firebaseapp.com",
  projectId: "reviewgush",
  storageBucket: "reviewgush.appspot.com",
  messagingSenderId: "125406219035",
  appId: "1:125406219035:web:36af791fedc322b48021be",
  measurementId: "G-R6BHN1JTEM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth
export const auth = getAuth(app);