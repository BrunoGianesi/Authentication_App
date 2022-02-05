// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb3_cxmZwRLKsA_1KJW8Gc9IuSsXo6M_c",
  authDomain: "authenticationproject-4030b.firebaseapp.com",
  projectId: "authenticationproject-4030b",
  storageBucket: "authenticationproject-4030b.appspot.com",
  messagingSenderId: "792117341968",
  appId: "1:792117341968:web:dc7374ac294f2554e77f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth, app };