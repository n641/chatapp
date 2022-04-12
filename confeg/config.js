// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA13bXqdl_Gp7b95LTzhw-C4do7eQciM2A",
  authDomain: "chatapp-8b777.firebaseapp.com",
  projectId: "chatapp-8b777",
  storageBucket: "chatapp-8b777.appspot.com",
  messagingSenderId: "436747809772",
  appId: "1:436747809772:web:13694c312185e0f92b46c9",
  measurementId: "G-PXCDJ0YLVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { app, db, auth };
