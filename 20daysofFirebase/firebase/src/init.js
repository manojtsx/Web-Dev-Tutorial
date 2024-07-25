// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-MYhaeJMZlOecE2s9bxcIHMky3JYWifA",
  authDomain: "tutorial-2c26b.firebaseapp.com",
  projectId: "tutorial-2c26b",
  storageBucket: "tutorial-2c26b.appspot.com",
  messagingSenderId: "511972189846",
  appId: "1:511972189846:web:7d0b8ad6f9124fef91c4b7",
  measurementId: "G-TDXLC159N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;