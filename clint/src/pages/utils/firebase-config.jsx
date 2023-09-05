// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAROiRsQydSeE_5-NNIXPS2XsIy_s7dii8",
  authDomain: "netflix-2e2bf.firebaseapp.com",
  projectId: "netflix-2e2bf",
  storageBucket: "netflix-2e2bf.appspot.com",
  messagingSenderId: "690011111878",
  appId: "1:690011111878:web:5bc9fd04a67d8177ddb2c7",
  measurementId: "G-7MJC0P57XH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
