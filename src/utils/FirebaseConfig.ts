// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection,getFirestore} from "firebase/firestore/";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZd3_08pj8QmAtoKgFhErw4J231UOjASI",
  authDomain: "video-app-3b97e.firebaseapp.com",
  projectId: "video-app-3b97e",
  storageBucket: "video-app-3b97e.appspot.com",
  messagingSenderId: "299816458225",
  appId: "1:299816458225:web:85114395d1e029541c1650",
  measurementId: "G-FVNPT86NGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);