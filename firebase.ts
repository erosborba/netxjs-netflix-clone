// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCeLJC3r_o4h64GQBqfBgX6I1qCCKcM4j8",
  authDomain: "quaseflix.firebaseapp.com",
  projectId: "quaseflix",
  storageBucket: "quaseflix.appspot.com",
  messagingSenderId: "568904810224",
  appId: "1:568904810224:web:04d5200157f5550aa94c35"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db =  getFirestore();
const auth = getAuth();

export { db, auth };
export default app;
