// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxMb9bGFJ7LdpjPTvM5Edt5fC7bYKnLsA",
  authDomain: "project-59fcb.firebaseapp.com",
  projectId: "project-59fcb",
  storageBucket: "project-59fcb.appspot.com",
  messagingSenderId: "122452811663",
  appId: "1:122452811663:web:a2ba5676301f047e0975fa",
  measurementId: "G-TBVG4PVFFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);