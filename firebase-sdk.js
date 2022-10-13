// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ9ySbMsPj9M0tprlCLtRhpRCdwcRFmb8",
  authDomain: "themuw-ffdeb.firebaseapp.com",
  projectId: "themuw-ffdeb",
  storageBucket: "themuw-ffdeb.appspot.com",
  messagingSenderId: "88274033672",
  appId: "1:88274033672:web:7e27da3c9905448a31c5bd",
  measurementId: "G-L1EYG5TR8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
